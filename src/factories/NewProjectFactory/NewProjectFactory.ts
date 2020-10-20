import chalk from 'chalk';
import shell from 'shelljs';
import fs from 'fs';
import path from 'path';
import { defaultDependencies, defaultDevDependencies } from '../../utils/defaultDependencies';
import { paths } from '../ComponentFactory/constants';
import FileFactory from '../FileFactory';
import handlebars from 'handlebars';

export default class NewProjectFactory {
  projectName: string;
  path: string;

  constructor(projectName: string, path: string) {
    this.projectName = projectName;
    this.path = path;
  }

  public async buildProject() {
    try {
      console.log(chalk.blue(`Creating the new ${this.projectName} project`));

      await shell.exec(`npx create-react-app ${this.projectName} --template typescript`);

      await shell.exec(`cd ${this.projectName}`);

      fs.rmdirSync(`./${this.projectName}/src`, { recursive: true });

      const defaultSrcPath = path.join(__dirname, '..', '..', '..', 'templates');
      await this.importDefaultSrc(defaultSrcPath, this.projectName);

      shell.exec(`yarn`);

      await defaultDependencies.forEach(dependency => {
        shell.exec(`yarn --cwd ./${this.projectName}/ add ${dependency}`);
      });

      await defaultDevDependencies.forEach(devDependency => {
        shell.exec(`yarn --cwd ./${this.projectName}/ add -D @types/${devDependency}`);
      });

      console.log(chalk.green(`Project ${this.projectName} created successfully`));
    } catch(error) {
      console.log(chalk.red(`Failed to create the new project \n ${error}`));
    }
  }

  private importDefaultSrc(importPath: string, folderName: string) {
    const fileFactory = new FileFactory();
    const defaultSrc = fs.readdirSync(importPath);

    defaultSrc.forEach(file => {
      const templateFilePath = path.join(importPath, file);
      const fileStats = fs.statSync(templateFilePath);
      let fileContent = '';
      let fileExtention = '';

      if (fileStats.isFile()) {
        if (path.extname(templateFilePath) === '.hbs') {
          fileExtention = templateFilePath.split('.')[1];

          fileContent = this.buildHbsTemplate(templateFilePath);
        } else {
          fileExtention = path.extname(templateFilePath).substring(1);

          fileContent = fs.readFileSync(templateFilePath, 'utf-8');
        }

        fileFactory.createFile(file.split('.')[0], fileContent, fileExtention, folderName);
      } else if(fileStats.isDirectory()) {
        this.importDefaultSrc(path.join(importPath, file), path.join(folderName, file));
      }
    });
  }

  private buildHbsTemplate(filePath: string) {
    const source = fs.readFileSync(filePath, 'utf8');

    const template = handlebars.compile(source);

    const result = template({ projectName: this.projectName });

    return result;
  }
}