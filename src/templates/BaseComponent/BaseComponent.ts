export default class BaseComponent {
    componentName: string;

    constructor(componentName: string) {
        this.componentName = componentName;
    }

    public buildBaseTemplate() {
        return `
            ${this.buildImports()}

            const ${this.componentName}: FC = () => {
                return (
                    <></>;
                )
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
}
