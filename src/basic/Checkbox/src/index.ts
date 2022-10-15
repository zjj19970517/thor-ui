import { App } from 'vue';
import Checkbox from './Checkbox';

export const TTCheckbox = {
  install: (app: App) => {
    app.component(Checkbox.name, Checkbox);
  }
};

export default TTCheckbox;

export * from './Checkbox';

export * from './types';
