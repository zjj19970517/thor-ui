import { ComputedRef, nextTick, getCurrentInstance } from 'vue';
import { CheckboxProps } from '../types';
import { CheckboxModel } from './use-checkbox-model';

export const useCheckboxEvent = (
  props: CheckboxProps,
  {
    model,
    isDisabled
  }: Pick<CheckboxModel, 'model'> & {
    isDisabled: ComputedRef<boolean>;
  }
) => {
  const { emit } = getCurrentInstance()!;

  function emitChangeEvent(
    checked: string | number | boolean,
    e: InputEvent | MouseEvent
  ) {
    emit('change', checked, e);
  }

  function getLabeledValue(value: string | number | boolean) {
    return value === props.trueLabel || value === true
      ? props.trueLabel ?? true
      : props.falseLabel ?? false;
  }

  async function onClick(e: MouseEvent) {
    if (!isDisabled.value) {
      const eventTargets: EventTarget[] = e.composedPath();
      const hasLabel = eventTargets.some(
        item => (item as HTMLElement).tagName === 'LABEL'
      );
      if (!hasLabel) {
        model.value = getLabeledValue(
          [false, props.falseLabel].includes(model.value)
        );
        // update:Model 之后 触发 change
        await nextTick();
        emitChangeEvent(model.value, e);
      }
    }
  }

  return {
    onClick
  };
};
