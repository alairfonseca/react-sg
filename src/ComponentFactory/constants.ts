import { ComponentTypes } from './types';

const src = `${process.cwd()}/src`;
const { component, container } = ComponentTypes;

export const paths = {
    SRC_PATH: src,
    DEFAULT_COMPONENTS_PATH: `${src}/components`,
    DEFAULT_CONTAINERS_PATH: `${src}/containers`,
    DEFAULT_COMPONENTS_TEMPLATE_PATH: `${src}/templates/Components/Component.tsx.hbs`,
    DEFAULT_CONTAINERS_TEMPLATE_PATH: `${src}/templates/Containers/Container.tsx.hbs`,
    DEFAULT_TESTS_TEMPLATE_PATH: `${src}/templates/Tests/Test.ts.hbs`,
}

export const defaultPaths = {
    [component]: paths.DEFAULT_COMPONENTS_PATH,
    [container]: paths.DEFAULT_CONTAINERS_PATH,
}

export const templatePaths = {
    [component]: paths.DEFAULT_COMPONENTS_TEMPLATE_PATH,
    [container]: paths.DEFAULT_CONTAINERS_TEMPLATE_PATH,
    ['test']: paths.DEFAULT_TESTS_TEMPLATE_PATH,
}