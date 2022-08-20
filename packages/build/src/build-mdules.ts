import { rollup } from 'rollup';
import glob from 'fast-glob';
import type { OutputOptions } from 'rollup';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import esbuild from 'rollup-plugin-esbuild';
import { srcRoot, srcPackage } from '@thor-ui/internal';

import { generateExternal, writeBundles } from './utils';
import { buildConfigEntries } from './build-config';

export const target = 'es2018';

export const buildModules = async () => {
  const input = await glob(['**/*.{ts,tsx}'], {
    cwd: srcRoot,
    absolute: true,
    onlyFiles: true
  });
  const bundle = await rollup({
    input,
    plugins: [
      vue({
        isProduction: false
      }),
      vueJsx(),
      nodeResolve({
        extensions: ['.mjs', '.js', '.json', '.ts']
      }),
      commonjs(),
      esbuild({
        sourceMap: true,
        target,
        loaders: {
          '.vue': 'ts'
        }
      })
    ],
    external: await generateExternal(srcPackage),
    treeshake: false
  });
  await writeBundles(
    bundle,
    buildConfigEntries.map(([_, config]): OutputOptions => {
      return {
        format: config.format,
        dir: config.output.path,
        exports: undefined,
        preserveModules: true,
        preserveModulesRoot: srcRoot,
        sourcemap: false,
        entryFileNames: `[name].${config.ext}`
      };
    })
  );
};
