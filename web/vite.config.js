import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    port: 5027,
    host: '0.0.0.0',
    hot: true,
  },
  resolve: {
    alias: {
      '~bootstrap': 'node_modules/bootstrap',
    }
  }
})
