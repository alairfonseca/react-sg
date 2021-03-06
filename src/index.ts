import yargs, { describe } from 'yargs';
import ComponentFactory from './factories/ComponentFactory';
import { ComponentTypes } from './factories/ComponentFactory/types';
import NewProjectFactory from './factories/NewProjectFactory/NewProjectFactory';

const options = yargs.usage('g component <component name> or g container <container name>')
  .command('g [componentType] [componentName] [path]', 'Create a new component or container', (yargs) => {
    return yargs
    .option('componentType', {
      alias: 't',
      default: 'component',
      describe: 'Component type', type: 'string'
    })
    .option('componentName', {
      alias: 'n',
      describe: 'Component name', type: 'string', demandOption: true
    })
    .option('path', {
      alias: 'p',
      default: '',
      describe: 'Folder path', type: 'string'
    });
  })
  .command('new [projectName]', 'Create a new project (create-react-app)', (yargs) => {
    return yargs
      .option('projectName', {
        alias: 'n',
        describe: 'Project name', type: 'string'
      })
      .option('path', {
        alias: 'p',
        default: '',
        describe: 'Folder path', type: 'string'
      })
      .demandOption(['projectName'], 'Please provide project name')
      .usage('Usage: new <project name>');
  })
  .help()
  .argv;

const run = async () => {
  try {
    if (options._[0] == 'new') {
      await newProject(options);
    } else if (options._[0] == 'g') {
      await buildComponent(options);
    }
  } catch(error) {
    console.log(`Erro ${error}`);
  }
}

const buildComponent = async ({ componentName, componentType, path } = options) => {
  const componentFactory = new ComponentFactory(componentName, componentType as ComponentTypes, path);

  await componentFactory.buildComponent();
}

const newProject = async ({ projectName, path } = options) => {
  const newProjectFactory = new NewProjectFactory(projectName, path);
  console.log(projectName);
  console.log(path);
  await newProjectFactory.buildProject();
}

run();