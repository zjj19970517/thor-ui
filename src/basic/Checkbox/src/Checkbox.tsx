import { defineComponent } from 'vue';
import { useNamespace } from '../../../hooks';
import { useCheckbox } from './composable';

import { CheckboxEmit, checkboxProps, CheckboxProps } from './types';

export default defineComponent({
  name: 'TT' + 'Checkbox',
  props: checkboxProps,
  emits: ['update:modelValue', 'change'],
  setup(props: CheckboxProps, ctx) {
    const ns = useNamespace('checkbox');

    const { model, isDisabled, isChecked, onClick } = useCheckbox(
      props,
      ctx.emit as CheckboxEmit
    );

    return () => {
      const defaultSlot = ctx.slots.default ? ctx.slots.default() : props.label;

      return (
        <span class={[ns.b()]} onClick={onClick}>
          <span
            class={[
              ns.e('input'),
              ns.m(props.size || 'default'),
              ns.is('disabled', isDisabled.value),
              ns.is('checked', isChecked.value)
            ]}
          >
            <input
              v-model={model}
              class={ns.e('original')}
              type="checkbox"
              disabled={isDisabled.value}
              true-value={props.trueLabel}
              false-value={props.falseLabel}
            />
            <span class={ns.e('inner')} />
          </span>
          <span class={ns.e('label')}>{defaultSlot}</span>
        </span>
      );
    };
  }
});
