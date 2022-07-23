// @ts-ignore
import Demo from 'vitepress-theme-demoblock/components/Demo.vue';
// @ts-ignore
import DemoBlock from 'vitepress-theme-demoblock/components/DemoBlock.vue';
import { Test } from '../../../src/components/Test';

import type { App } from 'vue';

export function registerComponents(app: App<never>) {
  app.component('Demo', Demo);
  app.component('DemoBlock', DemoBlock);
  app.component('Test', Test);
}
