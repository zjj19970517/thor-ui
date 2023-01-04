import { defineConfig } from 'vitepress';

const sidebar = {
  '/': [
    {
      text: 'Basic 基础组件',
      items: [
        { text: 'Button 按钮', link: '/components/basic/button/index' },
        { text: 'Icon 图标', link: '/components/basic/icon/index' }
      ]
    },
    {
      text: 'Form 表单组件',
      items: [
        { text: 'Checkbox 多选', link: '/components/basic/checkbox/index' }
      ]
    }
  ]
};

export default defineConfig({
  base: '/thor-ui/',
  title: 'Thor UI ',
  themeConfig: {
    sidebar,
    nav: [
      { text: '指南', link: '/guide/index' }
    ],
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
