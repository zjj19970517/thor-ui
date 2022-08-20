import type { OutputOptions, RollupBuild } from 'rollup';

import { getPackageDependencies } from '@thor-ui/internal';

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
