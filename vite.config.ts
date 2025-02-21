import { defineConfig } from 'vite';

export default defineConfig({
  root: './', // Assuming your source code is in the src folder
  build: {
    outDir: './dist', // Build output will be placed in dist (relative to src folder)
    rollupOptions: {
      input: {
        main: './public/index.html', // Reference to the main HTML file in the public folder
        admin: './public/admin.html' // Reference to the admin HTML file in the public folder
      }
    }
  }
});
