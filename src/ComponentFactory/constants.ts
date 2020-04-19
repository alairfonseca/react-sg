import { ComponentTypes } from './types';

const src = `${process.cwd()}/src`;

export const paths = {
    SRC_PATH: src,
    DEFAULT_COMPONENTS_PATH: `${src}/components`,
    DEFAULT_CONTAINERS_PATH: `${src}/containers`
}

export const defaultPaths = {
    [ComponentTypes.component]: paths.DEFAULT_COMPONENTS_PATH,
    [ComponentTypes.container]: paths.DEFAULT_CONTAINERS_PATH,
}