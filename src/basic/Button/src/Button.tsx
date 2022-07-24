import { defineComponent, toRefs } from 'vue';

import { Prefix } from '@config/web';
import { buttonProps, ButtonProps } from './button-type';

export default defineComponent({
  name: Prefix + 'Button',
  props: buttonProps,
  setup(props: ButtonProps, { slots }) {
    const { type } = toRefs(props);
    return () => {
      const defaultSlot = slots.default ? slots.default() : '确认';
      return (
        <button class={`tt-btn tt-btn--${type.value}`}>{defaultSlot}</button>
      );
    };
  }
});
