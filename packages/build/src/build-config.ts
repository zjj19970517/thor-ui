import { epOutput, PKG_NAME } from '@thor-ui/internal';
import path from 'path';
import type { ModuleFormat } from 'rollup';

export const modules = ['esm'] as const;

export type Module = typeof modules[number];

export interface BuildInfo {
  module: 'ESNext' | 'CommonJS';
  format: ModuleFormat;
  ext: 'mjs' | 'cjs' | 'js';
  output: {
    name: string;
    path: string;
  };
  bundle: {
    path: string;
  };
}

export const buildConfig: Record<Module, BuildInfo> = {
  esm: {
    module: 'ESNext',
    format: 'esm',
    ext: 'mjs',
    output: {
      name: 'es',
      path: path.resolve(epOutput, 'es')
    },
    bundle: {
      path: `${PKG_NAME}/es`
    }
  }
};

export const buildConfigEntries = Object.entries(
  buildConfig
) as BuildConfigEntries;

export type BuildConfig = typeof buildConfig;
export type BuildConfigEntries = [Module, BuildInfo][];
