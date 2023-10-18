import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    Proxy: {
      "/server": {
        target: "http://localhost:3000",
        changeOrigin: true,
        rewriteL: (path) => path.replace(/^\/server/, "")
      }
    }
  }
})
