import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
// import svgr from 'vite-plugin-svgr';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      src: '/src',
      components: '/src/components',
    },
  },
  base: '/CarRentalBoard/',
  build: {
    target: 'esnext',
  },
});
