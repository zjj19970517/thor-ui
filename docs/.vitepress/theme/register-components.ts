// @ts-ignore
import Demo from 'vitepress-theme-demoblock/components/Demo.vue';
// @ts-ignore
import DemoBlock from 'vitepress-theme-demoblock/components/DemoBlock.vue';

import type { App } from 'vue';

export function registerDemoComponents(app: App<never>) {
  app.component('Demo', Demo);
  app.component('DemoBlock', DemoBlock);
}
