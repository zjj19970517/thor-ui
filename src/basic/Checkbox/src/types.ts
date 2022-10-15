import { PropType, ExtractPropTypes } from 'vue';

import { ComponentSize, UPDATE_MODEL_EVENT } from '../../../constants';

export type CheckboxValueType = string | number | boolean;

export const checkboxProps = {
  modelValue: {
    type: [Number, String, Boolean] as PropType<CheckboxValueType>,
    default: undefined
  },
  label: {
    type: String as PropType<string>,
    default: '选项'
  },
  trueLabel: {
    type: [Number, String, Boolean] as PropType<CheckboxValueType>,
    default: undefined
  },
  falseLabel: {
    type: [Number, String, Boolean] as PropType<CheckboxValueType>,
    default: undefined
  },
  disabled: {
    type: Boolean as PropType<boolean>,
    default: false
  },
  size: {
    type: String as PropType<ComponentSize>,
    default: 'default'
  }
} as const;

export type CheckboxProps = ExtractPropTypes<typeof checkboxProps>;

export type CheckboxEmitEvents = typeof UPDATE_MODEL_EVENT | 'change';

export type CheckboxEmit = (event: CheckboxEmitEvents, ...args: any[]) => void;
