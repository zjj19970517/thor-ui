import { computed, defineComponent } from 'vue';
import type { StyleValue } from 'vue';

import { iconProps, IconProps } from './icon-type';
import { Prefix } from '../../../common/constants';
import { useNamespace } from '../../../hooks';
import { isUndefined } from '../../../utils/type';
import { addUnit } from '../../../utils/dom';

export default defineComponent({
  name: Prefix + 'Icon',
  inheritAttrs: false,
  props: iconProps,
  setup(props: IconProps, { slots, attrs }) {
    const ns = useNamespace('icon');

    const style = computed<StyleValue>(() => {
      if (!props.size && !props.color) return {};
      return {
        fontSize: isUndefined(props.size) ? undefined : addUnit(props.size),
        '--color': props.color
      };
    });

    return () => {
      const defaultSlot = slots.default ? slots.default() : '确认';
      return (
        <i class={ns.b()} style={style.value} {...attrs}>
          {defaultSlot}
        </i>
      );
    };
  }
});
