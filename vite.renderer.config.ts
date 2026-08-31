import { join } from 'node:path';

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': join(__dirname, 'src', 'renderer'),
      '_types_': join(__dirname, 'src', 'types')
    }
  }
});
