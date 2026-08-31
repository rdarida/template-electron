import { join } from 'node:path';

import { defineConfig } from 'vite';

// https://vitejs.dev/config
export default defineConfig({
  resolve: {
    alias: {
      '@': join(__dirname, 'src', 'renderer'),
      '_types_': join(__dirname, 'src', 'types')
    }
  }
});
