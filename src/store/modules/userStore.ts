import { defineStore } from 'pinia'

interface MerchantInfo {
  name: string
}
interface UserStore {
  authTime: number
  areaCode: string
  token: string
  merchantInfo: MerchantInfo
}

export default defineStore('user', {
  state: (): UserStore => ({
    authTime: 0,
    areaCode: '65',
    token: '',
    merchantInfo: {
      name: '',
    },
  }),
  getters: {},
  actions: {},
  persist: {
    enabled: true,
  },
})
