<template>
  <tm-app class="k-h-full k-pt-safe">
    <tm-indexes class="area-code-list">
      <tm-indexes-item
        v-for="(item, index) in hot"
        :title="index ? '' : '#'"
        :navTitle="index ? '' : '#'"
        :key="index"
        @click="() => handleSelectAreacode(item.tel)">
        <view class="k-h-88rpx k-flex k-items-center">
          <image class="k-h-30rpx k-w-50rpx" :src="item.flag"></image>
          <tm-text class="k-ml-3" :fontSize="30" color="#46595F">{{ item.name + ' ' + item.en }}</tm-text>
        </view>
      </tm-indexes-item>
      <tm-indexes-item
        v-for="(item, index) in list"
        @click="() => handleSelectAreacode(item.tel)"
        :title="item.isFirst ? item.en.charAt(0) : ''"
        :navTitle="item.en.charAt(0)"
        :key="index">
        <view class="k-h-88rpx k-flex k-items-center">
          <image class="k-h-30rpx k-w-50rpx" :src="item.flag"></image>
          <tm-text class="k-ml-3" :fontSize="30" color="#46595F">{{ item.name + ' ' + item.en }}</tm-text>
        </view>
      </tm-indexes-item>
    </tm-indexes>
  </tm-app>
</template>

<script setup lang="ts">
import areaList from '@/static/data/list.json'

const { list, hot } = areaList

// 选择手机区号
const handleSelectAreacode = (item: string) => {
  const userStore = useUserStore()
  userStore.areaCode = item
  uni.navigateBack()
}
</script>

<style lang="scss" scoped>
.area-code-list {
  height: 100% !important;
  ::v-deep uni-scroll-view {
    height: 100% !important;
    & + view {
      top: 240rpx !important;
    }
  }
}
</style>
