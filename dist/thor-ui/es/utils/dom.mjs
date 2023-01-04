import { isString } from '../node_modules/.pnpm/@vue_shared@3.2.37/node_modules/@vue/shared/dist/shared.esm-bundler.mjs';
import './type.mjs';
import { isNumber } from '../node_modules/.pnpm/@vueuse_shared@9.1.0_vue@3.2.37/node_modules/@vueuse/shared/index.mjs';

function addUnit(value, defaultUnit = "px") {
  if (!value)
    return "";
  if (isString(value)) {
    return value;
  } else if (isNumber(value)) {
    return `${value}${defaultUnit}`;
  }
}

export { addUnit };
