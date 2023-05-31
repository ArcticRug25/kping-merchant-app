<template>
  <tm-app class="k-w-screen k-h-screen k-bg-#f5f5f5">
    <view
      class="k-box-border k-px-20rpx k-relative k-h-32vh k-w-full k-bg-gradient-to-r k-from-#E3E0F7 k-to-#F1DFE9"
      :style="{ paddingTop: statusBarHeight + 'px' }">
      <view class="k-bg-white k-rounded-20 k-center k-w-fit k-p-3 k-mt-2 k-shadow-lg">
        <view class="k-rounded-25 k-h-80 k-w-80 k-overflow-hidden k-mr-3">
          <image
            class="k-full"
            src="https://mallkping.oss-ap-southeast-1.aliyuncs.com/def/76b35202211111525519226.jpg" />
        </view>
        <view class="k-flex k-flex-col k-mr-4">
          <tm-text color="#2a2a2a" :font-size="28" class="k-mb-1">Man Dang Dang</tm-text>
          <tm-text color="#999" :font-size="24">10000000001</tm-text>
        </view>
      </view>
      <!-- 商铺数据 -->
      <view class="k-flex k-w-full k-mt-4">
        <view class="k-flex-1 k-col-center">
          <tm-text color="#6E6E85" :font-size="26">Redeemed</tm-text>
          <tm-text color="#2a2a2a" :font-size="36" class="k-font-bold k-my-12rpx">0</tm-text>
          <tm-text color="#6E6E85" :font-size="24">yday 0</tm-text>
        </view>
        <view class="k-flex-1 k-col-center">
          <tm-text color="#6E6E85" :font-size="26">Dispatched</tm-text>
          <tm-text color="#2a2a2a" :font-size="36" class="k-font-bold k-my-12rpx">0</tm-text>
          <tm-text color="#6E6E85" :font-size="24">yday 0</tm-text>
        </view>
        <view class="k-flex-1 k-col-center">
          <tm-text color="#6E6E85" :font-size="26">Total</tm-text>
          <view class="k-flex k-my-12rpx k-items-center">
            <tm-text color="#2a2a2a" :font-size="24" class="k-font-bold k-mr-4rpx">$</tm-text>
            <tm-text color="#2a2a2a" :font-size="36" class="k-font-bold k-align-end">0</tm-text>
          </view>
          <tm-text color="#6E6E85" :font-size="24">yday 0</tm-text>
        </view>
      </view>
      <view class="k-bg-#FDFDFD k-rounded-lg k-w-full k-box-border k-mt-5 k-px-4 k-overflow-hidden k-shadow-sm">
        <view class="k-my-3">
          <tm-text class="k-font-bold" color="#2a2a2a" :font-size="34">Store Operations</tm-text>
        </view>
        <view class="k-flex k-items-center k-mb-4 k-gap-5">
          <view class="k-col-center" @click="handleScanCode">
            <view class="k-bg-#F0EAFB k-rounded-xl k-w-80 k-h-80 k-center k-mb-2">
              <tm-text class="i-bi-qr-code-scan k-text-#714CEB k-text-lg"></tm-text>
            </view>
            <tm-text color="#393A43" :font-size="26">Scan</tm-text>
          </view>
          <view class="k-col-center">
            <view class="k-bg-#F8ECF1 k-rounded-xl k-w-80 k-h-80 k-center k-mb-2">
              <tm-text class="i-bi-pencil-square k-text-#E77B9F k-text-lg"></tm-text>
            </view>
            <tm-text color="#393A43" :font-size="26">Input Verify</tm-text>
          </view>
        </view>
      </view>
      <view class="k-bg-#FDFDFD k-rounded-lg k-w-full k-box-border k-mt-5 k-px-4 k-overflow-hidden k-shadow-sm">
        <view class="k-my-3">
          <tm-text class="k-font-bold" color="#2a2a2a" :font-size="34">Store Data</tm-text>
        </view>
        <view class="k-flex k-items-center k-mb-4 k-gap-5">
          <view class="k-col-center" @click="navigateToPage('record')">
            <view class="k-bg-#E9F0FA k-rounded-xl k-w-80 k-h-80 k-center k-mb-2">
              <tm-text class="i-bi-clipboard-data-fill k-text-#70A6F3 k-text-lg"></tm-text>
            </view>
            <tm-text color="#393A43" :font-size="26">Record</tm-text>
          </view>
        </view>
      </view>
    </view>
  </tm-app>
</template>

<script setup lang="ts">
import { onLoad, onUnload } from '@dcloudio/uni-app'
import { EventEmit } from '@/enum'

onLoad(() => {
  console.log('onLoad')
  uni.$on(EventEmit.HANDLE_USER_LOGIN, (type: string) => {
    uni.navigateTo({
      url: '/pages/merchantForm/merchantForm',
    })
  })
})

onUnload(() => {
  uni.$off(EventEmit.HANDLE_USER_LOGIN)
})

const { statusBarHeight } = uni.$tm.u.getWindow()

const userStore = useUserStore()
userStore.token = ''
if (!userStore.token) {
  uni.navigateTo({
    url: '/pages/login/login',
  })
}

// 扫码
const handleScanCode = () => {
  uni.scanCode({
    success: (res) => {
      console.log(res)
    },
  })
}

// 跳转页面
const navigateToPage = (url: string) => {
  uni.navigateTo({
    url: `/pages/${url}/${url}`,
  })
}
</script>

<style lang="scss" scoped></style>
