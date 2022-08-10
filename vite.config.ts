import { defineConfig } from "vite";
import { resolve } from "path";
import react from "@vitejs/plugin-react";
import EnvironmentPlugin from "vite-plugin-environment";
import type { UserConfig } from "vitest/config";

// https://vitejs.dev/config/

const test = {
  globals: true,
  environment: "jsdom",
  setupFiles: ["src/__tests__/setupTests.ts"],
  threads: false,
  watch: false,
} as UserConfig["test"];

export default defineConfig({
  plugins: [react(), EnvironmentPlugin(["API_KEY"])],
  server: { port: 3000 },
  build: {
    minify: false,
  },
  resolve: {
    alias: {
      "~": resolve(__dirname, "src"),
    },
  },
  root: "",
  // @ts-ignore
  test,
});
