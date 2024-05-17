/// <reference types="vitest" />

import { defineConfig } from "vite";
import { resolve } from "path";
import react from "@vitejs/plugin-react";
import tsConfigPaths from "vite-tsconfig-paths";
import tailwindcss from "tailwindcss";
import autoprefixer from "autoprefixer";
import dts from "vite-plugin-dts";

export default defineConfig({
  plugins: [react(), tsConfigPaths(), dts({ rollupTypes: true })],
  build: {
    // ui-library entry and output settings
    lib: {
      entry: resolve(__dirname, "lib/main.ts"),
      name: "drago-ui",
      fileName: "drago-ui",
    },
    rollupOptions: {
      external: ["react", "react-dom", "react/jsx-runtime"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
          "react/jsx-runtime": "react/jsx-runtime",
        },
      },
    },
  },
  css: {
    postcss: {
      plugins: [tailwindcss, autoprefixer],
    },
  },
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./lib/test/setup.ts",
    css: true, // may slow things down
  },
});
