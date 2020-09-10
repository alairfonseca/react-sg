import fs from 'fs';
import handlebars from 'handlebars';
import { templatePaths } from '../../ComponentFactory/constants';
import beautify from 'js-beautify'

export default class BaseComponent {
    componentName: string;

    constructor(componentName: string) {
        this.componentName = componentName;
    }

    public buildFile(fileType: 'component' | 'container' | 'test') {
        const source = fs.readFileSync(`${templatePaths[fileType]}`, 'utf8');

        const template = handlebars.compile(source);

        const result = template({ componentName: this.componentName });

        return result;
    }

    public buildIndexTemplate() {
        return beautify(this.buildIndexContent(), { brace_style: 'preserve-inline' });
    }

    private buildIndexContent() {
        return `
            export { default } from './${this.componentName}';
        `;
    }
}
