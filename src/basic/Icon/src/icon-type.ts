import { PropType, ExtractPropTypes } from 'vue';

export const iconProps = {
  size: {
    type: Number as PropType<number>,
    default: 14
  },
  color: {
    type: String as PropType<string>,
    default: '#333'
  }
} as const;

export type IconProps = ExtractPropTypes<typeof iconProps>;
