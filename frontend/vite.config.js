import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api/": "https://e-com2-server-side-api.vercel.app/",
      "/uploads/": "https://e-com2-server-side-api.vercel.app/",
    },
  },
});
