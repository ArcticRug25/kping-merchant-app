<template>
  <view class="k-col-center k-w-ful k-bg-white k-rounded-lg k-shadow-sm k-box-border k-p3">
    <tm-text color="#888">Click to scan and redeem QR code</tm-text>
    <text class="i-bi-qr-code-scan k-text-240 k-mt-4 k-text-#2a2a2a" @click="handleScanCode"></text>
    <view class="k-w-full k-h-1px k-bg-#f5f5f5 k-my-6"></view>
    <tm-input
      class="k-w-80%"
      fontColor="#2a2a2a"
      v-model="verificationCode"
      placeholder-style="font-size: 12px;"
      placeholder="Enter the verification code for redemption"></tm-input>
    <tm-button
      :margin="[0, 30, 0, 16]"
      :round="25"
      :width="320"
      :height="70"
      color="#5464E3"
      :disabled="!verificationCode"
      @click="handleVerification"
      >Verification</tm-button
    >
  </view>
</template>

<script setup lang="ts">
const handleVerification = () => {
  uni.navigateTo({
    url: '/pages/verificationResult/verificationResult',
  })
}
const verificationCode = ref('')
// 扫码
const handleScanCode = () => {
  uni.scanCode({
    success: (res) => {
      console.log(res)
    },
  })
}
</script>

<style lang="scss" scoped></style>
