import { PropType, ExtractPropTypes } from 'vue';

export type IButtonType = 'primary' | 'success' | 'warning' | 'danger' | 'info';

export const buttonProps = {
  type: {
    type: String as PropType<IButtonType>,
    default: 'default'
  }
} as const;

export type ButtonProps = ExtractPropTypes<typeof buttonProps>;
