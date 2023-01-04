import { defineComponent, computed, createVNode, mergeProps } from 'vue';
import { iconProps } from './icon-type.mjs';
import { Prefix } from '../../../common/constants.mjs';
import '../../../hooks/index.mjs';
import { isUndefined } from '../../../utils/type.mjs';
import { addUnit } from '../../../utils/dom.mjs';
import { useNamespace } from '../../../hooks/use-namespace/index.mjs';

var Icon = defineComponent({
  name: Prefix + "Icon",
  inheritAttrs: false,
  props: iconProps,
  setup(props, {
    slots,
    attrs
  }) {
    const ns = useNamespace("icon");
    const style = computed(() => {
      if (!props.size && !props.color)
        return {};
      return {
        fontSize: isUndefined(props.size) ? void 0 : addUnit(props.size),
        "--color": props.color
      };
    });
    return () => {
      const defaultSlot = slots.default ? slots.default() : "\u786E\u8BA4";
      return createVNode("i", mergeProps({
        "class": ns.b(),
        "style": style.value
      }, attrs), [defaultSlot]);
    };
  }
});

export { Icon as default };
