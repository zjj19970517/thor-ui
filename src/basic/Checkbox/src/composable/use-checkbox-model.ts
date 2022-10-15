import { computed, ref } from 'vue';
import { UPDATE_MODEL_EVENT } from '../../../../constants';
import { CheckboxEmit, CheckboxProps, CheckboxValueType } from '../types';

export const useCheckboxModel = (props: CheckboxProps, emit: CheckboxEmit) => {
  const selfModel = ref<CheckboxValueType>(false);
  const model = computed({
    get() {
      return props.modelValue ?? selfModel.value;
    },
    set(val: CheckboxValueType) {
      emit(UPDATE_MODEL_EVENT, val);
      selfModel.value = val;
    }
  });

  return {
    model
  };
};

export type CheckboxModel = ReturnType<typeof useCheckboxModel>;
