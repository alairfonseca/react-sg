import fs from 'fs-extra';
import chalk from 'chalk';

import { ComponentTypes } from '../ComponentFactory/types';

export default class FileFactory {
    componentType: ComponentTypes

    constructor(componentType: ComponentTypes, path?: string) {
        this.componentType = componentType;
    }

    public createFile(fileName: string, fileContent: string, extension: string, path: string) {
        try {
            this.createFolder(path);

            console.log(`criando o arquivo - ${path}/${fileName}.${extension}`);
            fs.writeFileSync(`${path}/${fileName}.${extension}`, fileContent, 'utf-8');
        } catch (error) {
            console.log(chalk.red(`Erro ao criar o arquivo ${fileName} \n ${error}`));
        }
    }

    private createFolder(path: string) {
        if (!fs.existsSync(`./${path}`)) {
            fs.mkdirSync(path, { recursive: true });
        }
    }
}