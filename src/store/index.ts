import { App } from 'vue'
import { createPinia } from 'pinia'
import piniaPersist from 'pinia-plugin-persist-uni'
import useUserStore from './modules/userStore'
import useCountStore from './modules/countStore'

export function setupPinia(app: App) {
  const pinia = createPinia()
  pinia.use(piniaPersist)
  app.use(pinia)
}

export { useUserStore, useCountStore }
