import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/react-calculator/",
  assetsDir: "calculater/src",
  plugins: [react()],
});