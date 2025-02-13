import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/synergyenglish",
  define: {
    "import.meta.env.VITE_BASE_CDN_URL": JSON.stringify(
      process.env.VITE_BASE_CDN_URL
    ),
  },
  server: {
    mimeTypes: {
      "application/javascript": ["js"],
    },
  },
  build: {
    rollupOptions: {
      output: {
        entryFileNames: `[name].js`,
        chunkFileNames: `[name].js`,
        assetFileNames: `[name].[ext]`,
      },
    },
  },
});
