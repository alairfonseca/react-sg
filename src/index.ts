import yargs from 'yargs';
import ComponentFactory from './ComponentFactory';
import { ComponentTypes } from './FileFactory/types';

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
    return yargs.usage('Usage: new <project name>');
})
.help()
.argv;


const run = () => {
    try {
        console.log(options);

        if (options._[0] == 'new') {
            console.log('Creating a new React project...');
        } else if (options._[0] == 'g') {
            buildComponent(options);
        }
    } catch(error) {
        console.log(`Erro ${error}`);
    }
}

const buildComponent = ({ componentName, componentType, path } = options) => {
    const componentFactory = new ComponentFactory(componentName, componentType as ComponentTypes, path);

    componentFactory.buildComponent();
}

run();