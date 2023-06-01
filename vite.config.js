import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/react-server",
  plugins: [react()],
  server: {
    proxy: "https://notes-api-t91y.onrender.com",
  },
});
