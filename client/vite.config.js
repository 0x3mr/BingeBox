import { defineConfig } from "vite";
import { fileURLToPath } from "url";

import path from "path";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
  plugins: [react(), tailwindcss()],
  // GitHub Pages is served from /BingeBox/, so set the base path for assets.
  // If you switch to a custom domain, you can change this back to "/" or "".
  base: "/BingeBox/",
  resolve: {
    alias: {
      $: path.resolve(__dirname, "./src"),
    },
  },
});
