import { defineConfig } from 'vite';
import vueJsx from '@vitejs/plugin-vue-jsx';
import path from 'path';

export default defineConfig({
  plugins: [vueJsx()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '../src'),
      '@docs': path.resolve(__dirname, '../docs')
    }
  }
});
