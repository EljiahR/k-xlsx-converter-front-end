import { defineConfig, type UserConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tsConfigPaths from "vite-tsconfig-paths";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tsConfigPaths()  
  ],
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: './__tests__/setup.ts'
  }
} as UserConfig)