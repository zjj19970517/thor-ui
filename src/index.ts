import type { App, Plugin } from 'vue';

import * as components from './components';

const ThorUi = {
  install(app: App) {
    Object.keys(components).forEach(key => {
      const Component = components[key as keyof typeof components];
      if ('install' in Component || typeof Component === 'function') {
        app.use(Component as Plugin);
      }
    });
  }
};

export default ThorUi;

export * from './components';
