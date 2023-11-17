import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
// import svgr from 'vite-plugin-svgr';
import pluginRewriteAll from 'vite-plugin-rewrite-all';

export default defineConfig({
  plugins: [react(), pluginRewriteAll()],
  resolve: {
    alias: {
      src: '/src',
      components: '/src/components',
    },
  },
  base: '/CarRentalBoard',
  build: {
    target: 'esnext',
  },
});
