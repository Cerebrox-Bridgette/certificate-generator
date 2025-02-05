import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  preview: {
    port: 5173,
    strictPort: true,
    host: true,
},
server: {
    port: 5173,
    host: true,
},
  assetsInclude: ["**/*.xlsx"],
});
