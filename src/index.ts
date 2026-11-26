import type { RehypeTikzjaxOptions } from "@yavidor/rehype-tikzjax";
import type { QuartzTransformerPlugin } from "@quartz-community/types";

import rehypeTikzjax from "@yavidor/rehype-tikzjax";

type Options = RehypeTikzjaxOptions;

export const Quartikz: QuartzTransformerPlugin<Options> = (options?: Options) => {
  return {
    name: "Quartikz",
    htmlPlugins() {
      return [[rehypeTikzjax, options]]
    }
  }
}
