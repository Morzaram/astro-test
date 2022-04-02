import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

import turbolinks from "@astrojs/turbolinks";

// https://astro.build/config
export default defineConfig({
  devOptions: {
    tailwindConfig: "./tailwind.config.js",
  },
  integrations: [tailwind(), turbolinks()],
});
