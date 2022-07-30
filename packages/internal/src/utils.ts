import type { ProjectManifest } from '@pnpm/types';

export const getPackageManifest = (pkgPath: string) => {
  return require(pkgPath) as ProjectManifest;
};

export const getPackageDependencies = (
  pkgPath: string
): Record<'dependencies' | 'peerDependencies', string[]> => {
  const manifest = getPackageManifest(pkgPath);
  const { dependencies = {}, peerDependencies = {} } = manifest;

  return {
    dependencies: Object.keys(dependencies),
    peerDependencies: Object.keys(peerDependencies)
  };
};
