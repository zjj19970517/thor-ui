const defaultNamespace = "tt";
const _bem = (namespace, block, blockSuffix, element, modifier) => {
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
const useNamespace = (block) => {
  const namespace = defaultNamespace;
  const b = (blockSuffix = "") => _bem(namespace, block, blockSuffix, "", "");
  return {
    namespace,
    b
  };
};

export { _bem, useNamespace };
