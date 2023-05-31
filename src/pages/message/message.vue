<template>
  <tm-app class="k-bg-#f5f5f5 k-w-screen k-min-h-screen">
    <tm-navbar title="Message" color="#5064eb" :shadow="8" hideHome></tm-navbar>
    <tm-slide-switch v-for="item in 4" :key="item" :height="120" :rightWidth="120">
      <tm-cell
        :margin="[0, 0]"
        :padding="[24, 0]"
        :height="120"
        :avatarSize="90"
        :avatarRound="25"
        rightIcon=""
        showAvatar
        avatar="https://img.yzcdn.cn/vant/cat.jpeg"
        _class="k-justify-center">
        <template #title>
          <tm-text class="k-font-600" :font-size="28">User93877728</tm-text>
        </template>
        <template #label>
          <view class="k-truncate k-w-80vw k-mt-1 k-text-24rpx k-text-#999"
            >Can you give me a voucher? Canaaaaaaaaaaaaaaaaaaaadsadasdadaaaaa</view
          >
          <view class="k-w-82vw k-h-1px k-bg-#F5F4F7 k-absolute k-bottom-1 k-right-0"></view>
        </template>
        <template #rightText>
          <view class="k-absolute k-right-24 k-top-28">
            <tm-text color="#ccc" :font-size="24">2021/08/08</tm-text>
          </view>
        </template>
      </tm-cell>
      <template #right>
        <view class="flex flex-row flex-row-center-end">
          <tm-sheet
            _class="flex flex-row flex-row-center-center"
            :width="120"
            :height="120"
            color="#E93423"
            no-level
            :margin="[0]"
            :padding="[0]">
            <text class="i-bi-trash3-fill k-text-white"></text>
          </tm-sheet>
        </view>
      </template>
    </tm-slide-switch>
  </tm-app>
</template>

<script setup lang="ts"></script>

<style scoped></style>
