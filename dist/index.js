import { createRequire } from 'module';
import rehypeTikzjax from '@yavidor/rehype-tikzjax';

createRequire(import.meta.url);
var Quartikz = (options) => {
  return {
    name: "Quartikz",
    htmlPlugins() {
      return [[rehypeTikzjax, options]];
    }
  };
};

export { Quartikz };
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map