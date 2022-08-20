import { ComponentWithInstall } from '@/types/components';
import type { App } from 'vue';

export const withInstall = <T>(main: T) => {
  (main as ComponentWithInstall<T>).install = (app: App): void => {
    app.component((main as any).name, main);
  };

  return main as ComponentWithInstall<T>;
};
