import { createSSRApp } from 'vue'
import * as Pinia from 'pinia'
import tmui from './tmui'
import App from './App.vue'

// unocss
import 'uno.css'
import { setupPinia } from './store'

export function createApp() {
  const app = createSSRApp(App)
  setupPinia(app)
  app.use(tmui)
  return {
    app,
    // uni-app 官方文档示例 https://zh.uniapp.dcloud.io/tutorial/vue3-pinia.html#%E7%8A%B6%E6%80%81%E7%AE%A1%E7%90%86-pinia
    Pinia, // 此处必须将 Pinia 返回
  }
}
