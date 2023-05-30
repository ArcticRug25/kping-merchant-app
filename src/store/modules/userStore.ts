import { defineStore } from 'pinia'

interface UserStore {
  authTime: number
  areaCode: string
}

export default defineStore('user', {
  state: (): UserStore => ({
    authTime: 0,
    areaCode: '65',
  }),
  getters: {},
  actions: {},
  persist: {
    enabled: true,
  },
})
