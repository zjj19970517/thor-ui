const defaultNamespace = 'tt';

const statePrefix = 'is-';

export const _bem = (
  namespace: string,
  block: string,
  blockSuffix: string,
  element: string,
  modifier: string
) => {
  let cls = `${namespace}-${block}`;
  if (blockSuffix) {
    cls += `-${blockSuffix}`;
  }
  if (element) {
    cls += `__${element}`;
  }
  if (modifier) {
    cls += `--${modifier}`;
  }
  return cls;
};

export const useNamespace = (block: string) => {
  const namespace = defaultNamespace;

  // 仅有 block + blockSuffix
  const b = (blockSuffix = '') => _bem(namespace, block, blockSuffix, '', '');
  // block + element
  const e = (element?: string) =>
    element ? _bem(namespace, block, '', element, '') : '';
  // block + modifier
  const m = (modifier?: string) =>
    modifier ? _bem(namespace, block, '', '', modifier) : '';

  const is = (name: string, ...args: [boolean | undefined] | []) => {
    const state = args.length >= 1 ? args[0]! : true;
    return name && state ? `${statePrefix}${name}` : '';
  };
  return {
    namespace,
    b,
    e,
    m,
    is
  };
};
