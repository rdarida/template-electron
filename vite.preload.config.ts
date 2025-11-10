import { defineConfig } from 'vite';
import { join } from 'path';

// https://vitejs.dev/config
export default defineConfig({
  resolve: {
    alias: {
      '@': join(__dirname, 'src', 'renderer'),
      '_types_': join(__dirname, 'src', 'types')
    }
  }
});
