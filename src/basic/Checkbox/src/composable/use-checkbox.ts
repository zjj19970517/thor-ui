import { computed, toRaw } from 'vue';
import { isBoolean } from '@vueuse/core';
import { isArray } from '@vue/shared';
import { CheckboxEmit, CheckboxProps } from '../types';
import { useCheckboxEvent } from './use-checkbox-event';
import { useCheckboxModel } from './use-checkbox-model';

export const useCheckbox = (props: CheckboxProps, emit: CheckboxEmit) => {
  const { model } = useCheckboxModel(props, emit);

  const isDisabled = computed(() => props.disabled);

  const isChecked = computed<boolean>(() => {
    const value = model.value;
    if (isBoolean(value)) {
      return value;
    } else if (isArray(value)) {
      return value.map(toRaw).includes(props.label);
    } else if (value !== null && value !== undefined) {
      return value === props.trueLabel;
    } else {
      return !!value;
    }
  });

  const { onClick } = useCheckboxEvent(props, { model, isDisabled });

  return {
    model,
    isDisabled,
    isChecked,
    onClick
  };
};

export type Checkbox = ReturnType<typeof useCheckbox>;
