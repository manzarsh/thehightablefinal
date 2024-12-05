import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc';
const { PORT = 3000} = process.env;


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server:{
    proxy:{
    '/api':{
    target:`http://localhost:${PORT}`,
    changeOrigin: true,
    },
    '/auth': {
    target:`http://localhost:${PORT}`,
    changeOrigin: true,
    },
    },
    },
    build: {
<<<<<<< HEAD
      outDir: '../dist',
=======
      outDir: '../dist/app',
>>>>>>> cd967e6a1a4e31a4ca7d48fa46d1f81f66be5485
    manifest: true,
    rollupOptions: {
    input: "./src/main.jsx",
    },
    },
})