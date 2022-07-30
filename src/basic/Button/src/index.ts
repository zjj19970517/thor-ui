import { App } from 'vue';
import Button from './Button';

export const TTButton = {
  install: (app: App) => {
    app.component(Button.name, Button);
  }
};

export default TTButton;

export * from './Button';
