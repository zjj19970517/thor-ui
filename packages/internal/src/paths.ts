import { resolve } from 'path';

export const projRoot = resolve(__dirname, '..', '..', '..');
export const srcRoot = resolve(projRoot, 'src');
export const distRoot = resolve(projRoot, 'dist');
export const epOutput = resolve(distRoot, 'thor-ui');
export const srcPackage = resolve(srcRoot, 'package.json');
