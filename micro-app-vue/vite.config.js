import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import qiankun from 'vite-plugin-qiankun'

// https://vitejs.dev/config/
export default defineConfig({
  // 生产环境需要指定运行域名作为base
  // base: 'http://xxx.com/'
  plugins: [
    vue(),
    qiankun('app-vue', {
      //  'vue-app' 是子应用名，与主应用注册时保持一致
      useDevMode: true // 如果是在主应用中加载子应用vite,必须打开这个,否则vite加载不成功, 单独运行没影响
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  server: {
    port: '5173',
    cors: true,
    origin: 'http://localhost:5173',  // 子应用引入到主应用之后，子应用中的图片在主应用下加载不出来、找不到，需要将origin设置成子应用本地运行地址
  }
})

