/// <reference types="vitest" />

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';

export default defineConfig({
  plugins: [vue(), vueJsx()],
  test: {
    // enable jest-like global test APIs
    globals: true,
    // simulate DOM with happy-dom
    environment: 'happy-dom',
    // 支持 tsx 组件
    transformMode: {
      web: [/.[tj]sx$/]
    },
    coverage: {
      // @ts-ignore
      provider: 'istanbul',
      reporter: ['text', 'json', 'html']
    }
  }
});
