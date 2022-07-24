import Theme from 'vitepress/theme';
import type { App } from 'vue';
import 'vitepress-theme-demoblock/theme/styles/index.css';

import { registerDemoComponents } from './register-components';
import ThorUi from '../../../src';
import '../../../src/index.scss';

export default {
  ...Theme,
  enhanceApp({ app }: { app: App<never> }) {
    registerDemoComponents(app); // 注册 vitepress-theme-demoblock 内置组件
    app.use(ThorUi); // 全量注册
  }
};
