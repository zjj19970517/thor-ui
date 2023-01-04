import { defineComponent, toRefs, createVNode } from 'vue';
import { buttonProps } from './button-type.mjs';

var Button = defineComponent({
  name: "TTButton",
  props: buttonProps,
  setup(props, {
    slots
  }) {
    const {
      type
    } = toRefs(props);
    return () => {
      const defaultSlot = slots.default ? slots.default() : "\u786E\u8BA4";
      return createVNode("button", {
        "class": `tt-btn tt-btn--${type.value}`
      }, [defaultSlot]);
    };
  }
});

export { Button as default };
