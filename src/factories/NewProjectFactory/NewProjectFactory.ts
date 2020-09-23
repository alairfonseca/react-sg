import chalk from 'chalk';

export default class NewProjectFactory {
  projectName: string;

  constructor(projectName: string) {
    this.projectName = projectName;
  }

  public buildProject() {
    try {
      console.log(chalk.blue(`Creating the new ${this.projectName} project`));



      console.log(chalk.green(`Project ${this.projectName} created successfully`));
  } catch(error) {
      console.log(chalk.red(`Failed to create the new project \n ${error}`));
  }
  }
}