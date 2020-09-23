import chalk from 'chalk';
import FileFactory from '../FileFactory';
import BaseComponent from '../templates/BaseComponent';

import { defaultPaths } from './constants';
import { ComponentTypes } from './types';
import { capitalize } from '../utils';

export default class ComponentFactory {
    componentName: string;
    componentType: ComponentTypes;
    path: string;
    baseComponent: BaseComponent;
    fileFactory: FileFactory;

    constructor(componentName: string, componentType: ComponentTypes, path: string) {
        this.componentName = componentName;
        this.componentType = componentType;
        this.path = path;
        this.baseComponent = new BaseComponent(this.componentName);
        this.fileFactory = new FileFactory(this.componentType as ComponentTypes, path);
    }

    public buildComponent() {
        try {
            console.log(chalk.blue(`Creating the ${this.componentType} ${this.componentName}...`));

            let path = '';

            if (!this.path) {
                path = defaultPaths[this.componentType];
            } else {
                path = this.path;
            }

            path = `${path}/${capitalize(this.componentName)}`;

            this.buildTestFiles(path);

            this.buildComponentFiles(path);

            console.log(chalk.green(`Component ${capitalize(this.componentName)} created successfully`));
        } catch(error) {
            console.log(chalk.red(`Falha ao criar o componente ${this.componentName} \n ${error}`));
        }
    }

    private buildTestFiles(path: string) {
        const testPath = `${path}/__tests__`;

        const content = this.buildTestContent();

        this.fileFactory.createFile(capitalize(this.componentName), content, 'test.tsx', testPath);
    }

    private buildTestContent() {
        return this.baseComponent.buildFile('test');
    }

    private buildComponentFiles(path: string) {
        const componentContent = this.buildComponentContent();
        const indexContent = this.buildIndexContent();

        this.fileFactory.createFile(capitalize(this.componentName), componentContent, 'tsx', path);
        this.fileFactory.createFile('index', indexContent, 'ts', path);
    }

    private buildComponentContent() {
        return this.baseComponent.buildFile('component');
    }

    private buildIndexContent() {
        return this.baseComponent.buildIndexTemplate();
    }
}