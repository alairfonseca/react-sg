import beautify from 'js-beautify';

export default class BaseComponent {
    componentName: string;

    constructor(componentName: string) {
        this.componentName = componentName;
    }

    // TODO transformar isso em uma classe, que cuidará dos imports etc etc etc
    public buildTestTemplate() {
        return beautify(this.buildTestContent(), { indent_size: 2, e4x: true });
    }

    public buildBaseTemplate() {
        return beautify(this.buildContent(), { indent_size: 2, e4x: true });
    }

    public buildIndexTemplate() {
        return beautify(this.buildIndexContent());
    }

    private buildContent() {
        return `
            ${this.buildImports()}

            const ${this.componentName}: FC = () => {
                return (
                    <div></div>
                );
            }
            
            export default ${this.buildExports()};
        `;
    }

    private buildImports() {
        return `
            import React, { FC } from 'react';
        `;
    }

    private buildExports() {
        return this.componentName;
    }

    private buildIndexContent() {
        return `
            export { default } from './${this.componentName}';
        `;
    }

    private buildTestContent() {
        return `
            import React from 'react';
            import '@testing-library/jest-dom';
            import { render } from '@testing-library/react';
            import ${this.componentName} from '../${this.componentName}';
            
            describe('${this.componentName} tests', () => {
                it('renders without crashing', () => {
                    const container = render(<${this.componentName} />);
                    expect(container).toBeTruthy();
                });
            });
        `;
    }
}
