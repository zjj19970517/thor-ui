import type { OutputOptions, RollupBuild } from 'rollup';
import { spawn } from 'child_process';
import { copyFile } from 'fs/promises';
import chalk from 'chalk';
import consola from 'consola';
import {
  epOutput,
  getPackageDependencies,
  projRoot,
  srcPackage
} from '@thor-ui/internal';
import path from 'path';

export const generateExternal = async (pkgPath: string) => {
  const { peerDependencies } = getPackageDependencies(pkgPath);
  return (id: string) => {
    const packages: string[] = peerDependencies;
    return [...new Set(packages)].some(
      pkg => id === pkg || id.startsWith(`${pkg}/`)
    );
  };
};

export function writeBundles(bundle: RollupBuild, options: OutputOptions[]) {
  return Promise.all(options.map(option => bundle.write(option)));
}

/**
 * 执行某个 cmd 命令
 * @param command 命令名称
 * @param cwd 工作目录
 * @returns
 */
export const run = async (command: string, cwd: string = projRoot) =>
  new Promise<void>((resolve, reject) => {
    const [cmd, ...args] = command.split(' ');
    consola.info(`run: ${chalk.green(`${cmd} ${args.join(' ')}`)}`);
    const app = spawn(cmd, args, {
      cwd,
      stdio: 'inherit',
      shell: process.platform === 'win32'
    });

    const onProcessExit = () => app.kill('SIGHUP');

    app.on('close', code => {
      process.removeListener('exit', onProcessExit);

      if (code === 0) resolve();
      else
        reject(
          new Error(`Command failed. \n Command: ${command} \n Code: ${code}`)
        );
    });
    process.on('exit', onProcessExit);
  });

export const copyFiles = () =>
  Promise.all([copyFile(srcPackage, path.join(epOutput, 'package.json'))]);
