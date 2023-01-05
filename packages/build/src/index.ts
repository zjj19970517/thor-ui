import { buildModules } from './build-modules';
import { run, copyFiles } from './utils';

const runBuild = () => {
  // clean
  // run('pnpm run clean');
  // buildModules();
  copyFiles();
  // TODO: 样式生产
  // TODO: 类型声明文件
};

runBuild();
