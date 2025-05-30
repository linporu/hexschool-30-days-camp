import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  base: '/hexschool-30-days-camp/',
  root: ".",
  publicDir: "public",
  build: {
    outDir: "dist",
    emptyOutDir: true,
    sourcemap: true,
    rollupOptions: {
      input: {
        index: resolve(__dirname, "index.html"),
        blog: resolve(__dirname, "blog.html"),
        "blog-detail": resolve(__dirname, "blog-detail.html"),
      },
      output: {
        entryFileNames: "js/[name].[hash].js",
        chunkFileNames: "js/[name].[hash].js",
        assetFileNames: (assetInfo) => {
          const info = assetInfo.name?.split(".") ?? [];
          const ext = info[info.length - 1];
          if (/css/.test(ext)) {
            return "css/[name].[hash].[ext]";
          }
          return "assets/[name].[hash].[ext]";
        },
      },
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        api: "modern",
      },
    },
    devSourcemap: true,
  },
  server: {
    port: 3000,
    open: true,
    host: true,
  },
  preview: {
    port: 5000,
    open: true,
  },
});
