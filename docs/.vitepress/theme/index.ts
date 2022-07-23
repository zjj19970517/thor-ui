import Theme from 'vitepress/theme';
import type { App } from 'vue';
import 'vitepress-theme-demoblock/theme/styles/index.css';

import { registerComponents } from './register-components';

export default {
  ...Theme,
  enhanceApp({ app }: { app: App<never> }) {
    registerComponents(app);
  }
};
