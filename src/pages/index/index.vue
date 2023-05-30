<template>
  <view>2</view>
</template>

<script setup lang="ts">
import { onLoad, onUnload } from '@dcloudio/uni-app'
import { EventEmit, UserAuth } from '@/enum'

onLoad(() => {
  console.log('onLoad')
  uni.$on(EventEmit.HANDLE_USER_LOGIN, (type: string) => {
    console.log(type)
  })
})

onUnload(() => {
  uni.$off(EventEmit.HANDLE_USER_LOGIN)
})

const userStore = useUserStore()
if (!userStore.token) {
  uni.navigateTo({
    url: '/pages/login/login',
  })
}
</script>

<style scoped></style>
