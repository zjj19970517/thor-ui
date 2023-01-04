import Button from './Button.mjs';

const TTButton = {
  install: (app) => {
    app.component(Button.name, Button);
  }
};

export { TTButton, TTButton as default };
