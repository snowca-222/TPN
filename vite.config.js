import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: '/TPN/',
  resolve: {
    alias: {
      // "@": "/src",
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      "@image": "/src/images"
      // 部署到github時打開
    }
  }
})
