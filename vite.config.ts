/// <reference types="vitest" />
import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';
import vtjump from 'vtjump';

// https://vite.dev/config/
export default defineConfig(() => ({
  plugins: [
    vtjump({}),
    tsconfigPaths({
      parseNative: false,
    }),
    react(),
  ],
  resolve: {},
  assetsInclude: ['/sb-preview/runtime.js'],
}));
