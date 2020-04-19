import fs from 'fs-extra';

import { ComponentTypes } from './types';
import { defaultPaths } from './constants';

export default class FileFactory {
    path?: string;
    fileName: string;
    fileContent: string;
    componentType: ComponentTypes
    
    constructor(fileName: string, fileContent: string, componentType: ComponentTypes, path?: string) {
        this.path = path;
        this.fileName = fileName;
        this.fileContent = fileContent;
        this.componentType = componentType;
    }

    public createFile() {
        try {
            if (!this.path) {
                this.path = defaultPaths[this.componentType];
            }

            this.createFolder(this.path);
    
            fs.writeFileSync(`${this.path}/${this.fileName}.tsx`, this.fileContent, 'utf-8');
        } catch (error) {
            console.log(`Erro ao criar o arquivo ${this.fileName} \n ${error}`);
        }
    }

    private createFolder(path: string) {
        if (!fs.existsSync(`./${path}`)) {
            fs.mkdirSync(path, { recursive: true });
        }
    }
}