/* eslint-disable vue/prefer-import-from-vue */
import { isString } from '@vue/shared';
import { isNumber } from './type';

export function addUnit(value?: string | number, defaultUnit = 'px') {
  if (!value) return '';
  if (isString(value)) {
    return value;
  } else if (isNumber(value)) {
    return `${value}${defaultUnit}`;
  }
}
