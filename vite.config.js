import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
  build: {
    outDir: 'dist',       // Output directory for the built files
    assetsDir: 'assets',  // Directory for assets within the output
    minify: true,         // Minification for production build
  },
  server: {
    open: true,           // Automatically open in the browser
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'), // Alias for cleaner imports from `src`
    },
  },
});
