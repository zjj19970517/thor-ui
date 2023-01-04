import * as components from './components.mjs';

const makeInstaller = () => {
  return {
    version: "0.0.1",
    install(app) {
      Object.keys(components).forEach((key) => {
        const Component = components[key];
        if ("install" in Component || typeof Component === "function") {
          app.use(Component);
        }
      });
    }
  };
};
var installer = makeInstaller();

export { installer as default };
