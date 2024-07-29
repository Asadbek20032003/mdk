import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      external: ["@fortawesome/fontawesome-svg-core"],
    },
  },
  resolve: {
    alias: {
      "@fortawesome/fontawesome-svg-core": "node_modules/@fortawesome/fontawesome-svg-core",
      "@fortawesome/free-solid-svg-icons": "node_modules/@fortawesome/free-solid-svg-icons",
      "@fortawesome/react-fontawesome": "node_modules/@fortawesome/react-fontawesome",
    },
  },
});
