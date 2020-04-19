import chalk from 'chalk';
import FileFactory from '../FileFactory';
import BaseComponent from '../templates/BaseComponent';

import { ComponentTypes } from '../FileFactory/types';

export default class ComponentFactory {
    componentName: string;
    componentType: ComponentTypes;
    path: string;
    baseComponent: BaseComponent;

    constructor(componentName: string, componentType: ComponentTypes, path: string) {
        this.componentName = componentName;
        this.componentType = componentType;
        this.path = path;
        this.baseComponent = new BaseComponent(this.componentName);
    }

    public buildComponent() {
        try {
            console.log(chalk.blue(`Creating the ${this.componentType} ${this.componentName}...`));

            const fileContent = this.buildFileContent();
            
            const fileFactory = new FileFactory(this.componentName, fileContent, this.componentType as ComponentTypes, this.path);
    
            fileFactory.createFile();

            console.log(chalk.green(`Component ${this.componentName} created successfully`));
        } catch(error) {
            console.log(chalk.red(`Failed to create component ${this.componentName} \n ${error}`));
        }
    }

    private buildFileContent() {
        return this.baseComponent.buildBaseTemplate();
    }
}