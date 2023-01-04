import installer from './default.mjs';
export { default } from './default.mjs';
import './components.mjs';
export { TTButton } from './basic/Button/src/index.mjs';
export { TTIcon } from './basic/Icon/src/index.mjs';

const install = installer.install;
const version = installer.version;

export { install, version };
