import deno from "@deno/vite-plugin";
import { reactRouter } from "@react-router/dev/vite";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [deno(), tailwindcss(), reactRouter()],
  ssr: {
    resolve: {
      conditions: ["module", "deno", "node", "development|production"],
      externalConditions: ["deno", "node"],
    },
  },
});
