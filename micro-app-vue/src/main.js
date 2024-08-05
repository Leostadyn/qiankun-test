import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import routes from './router'

import { renderWithQiankun, qiankunWindow } from 'vite-plugin-qiankun/dist/helper'
import { createRouter, createWebHistory } from 'vue-router'

let router = null
let instance = null
let history = null

function render(props = {}) {
  const { container } = props
  history = createWebHistory(qiankunWindow.__POWERED_BY_QIANKUN__ ? '/app-vue' : '/')
  router = createRouter({
    history,
    routes
  })

  instance = createApp(App)
  instance.use(router)
  instance.use(createPinia())
  instance.mount(container ? container.querySelector('#subRoot') : '#subRoot')
  if (qiankunWindow.__POWERED_BY_QIANKUN__) {
    console.log('我正在作为子应用运行')
  }
}

// some code
renderWithQiankun({
  bootstrap() {
    console.log('bootstrap')
  },
  mount(props) {
    console.log('viteapp mount')
    render(props)
    // console.log(instance.config.globalProperties.$route,333);
  },
  unmount() {
    console.log('vite被卸载了')
    instance.unmount()
    instance._container.innerHTML = ''
    history.destroy() // 不卸载  router 会导致其他应用路由失败
    router = null
    instance = null
  }
})

if (!qiankunWindow.__POWERED_BY_QIANKUN__) {
  render()
}

