import { defineConfig } from 'vitepress';

const sidebar = {
  '/': [
    { text: '快速开始', link: '/', items: [] },
    {
      text: 'Basic 基础组件',
      items: [
        { text: 'Button 按钮', link: '/components/basic/button/index' },
        { text: 'Icon 图标', link: '/components/basic/icon/index' },
      ]
    }
  ]
};

export default defineConfig({
  title: 'Thor UI',
  themeConfig: {
    sidebar,
    nav: [{ text: '指南', link: '/guide/index' }],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/57code/sheep-ui' }
    ]
  },
  markdown: {
    config: md => {
      const { demoBlockPlugin } = require('vitepress-theme-demoblock');
      md.use(demoBlockPlugin);
    }
  }
});
