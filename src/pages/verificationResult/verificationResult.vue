<template>
  <tm-app class="k-bg-#f5f5f5 k-w-screen k-min-h-screen">
    <tm-navbar title="Verification Result" color="#5064eb" :shadow="8" hideHome></tm-navbar>
    <view class="k-w-full k-my-3 k-flex-col k-flex">
      <view class="k-flex k-items-center k-mx-4 k-mb-3">
        <view class="k-w-6rpx k-h-24rpx k-bg-#5064eb k-mr-2 k-rounded"></view>
        <tm-text color="#333" :fontSize="28">Voucher infos</tm-text>
      </view>
      <tm-coupon extra :rightDetail="couponDetail" :priceDetail="priceDetail" moreText="rules">
        <template v-slot:extra>
          <tm-text :font-size="22" _class="opacity-7" label="1.No Restrictions on Usage"></tm-text>
          <tm-text :font-size="22" _class="opacity-7" label="2.No Restrictions on Usage"></tm-text>
        </template>
        <template #btn>
          <view class="k-hidden"></view>
        </template>
      </tm-coupon>
    </view>
    <view class="k-w-full k-box-border k-px-3 k-absolute k-bottom-3">
      <tm-button :margin="[0, 30]" class="important-k-w-full" :round="25" color="#5464E3" @click="handleVerification"
        >Verification</tm-button
      >
    </view>
    <tm-message ref="msg" :lines="2"></tm-message>
  </tm-app>
</template>
<script setup lang="ts">
import { surplice } from '@/tmui/components/tm-coupon/interface'
import { rightSurplice } from '../../tmui/components/tm-coupon/interface'
import tmMessage from '@/tmui/components/tm-message/tm-message.vue'

const msg = ref<InstanceType<typeof tmMessage> | null>(null)
const priceDetail = ref<surplice>({
  price: 100,
  suffix: '$',
  prefix: '',
  subtext: '60% off',
})

const couponDetail = ref<rightSurplice>({
  subtitle: 'Hot Pot',
  time: '2021-08-08 12:00:00',
  title: 'Mandangdang',
})

const handleVerification = () => {
  uni.showModal({
    content: 'Do you want to redeem this？',
    cancelText: 'Cancel',
    okText: 'Confirm',
    okColor: '#5464E3',
    success(res) {
      if (res.confirm) {
        // 执行确认后的操作
        msg.value?.show({
          duration: 1600,
          model: 'success',
        })
        setTimeout(() => {
          uni.navigateBack()
        }, 1800)
      } else {
        // 执行取消后的操作
      }
    },
  })
}
</script>
<style lang="scss" scoped>
::v-deep .tm-modal-title {
  display: none !important;
}
</style>
