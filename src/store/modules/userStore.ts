import { defineStore } from 'pinia'

interface MerchantInfo {
  name: string
}

interface MerchantForm {
  companyName: string
  UENNo: string
  address: string
  postalCode: string
  comanyEmail: string
  contactNumber: string
  website: string
  contactName: string
  contactPersonNumber: string
  email: string
}

interface UserStore {
  authTime: number
  areaCode: string
  token: string
  merchantInfo: MerchantInfo
  merchantForm: MerchantForm
}

export default defineStore('user', {
  state: (): UserStore => ({
    authTime: 0,
    areaCode: '65',
    token: '',
    merchantInfo: {
      name: '',
    },
    merchantForm: {
      companyName: '',
      UENNo: '',
      address: '',
      postalCode: '',
      comanyEmail: '',
      contactNumber: '',
      website: '',
      contactName: '',
      contactPersonNumber: '',
      email: '',
    },
  }),
  getters: {},
  actions: {},
  persist: {
    enabled: true,
  },
})
