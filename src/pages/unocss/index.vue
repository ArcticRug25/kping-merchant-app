<template>
  <view class="k-bg-#e2f3fe k-p-4">
    <view text-lg mb-2 class="k-text-c2">使用 class</view>
    <view class="k-p-5 k-bg-white k-rounded-xl k-shadow-md k-flex k-items-center k-mx-auto">
      <view>
        <view
          h-100
          w-100
          bg-cover
          class="k-bg-[url(https://img.cdn.sugarat.top/mdImg/MTY2ODA4OTc3MjcyMg==unocss-icon-gray.svg)]" />
      </view>
      <view ml-5>
        <view k-text="xl c1">UnoCSS</view>
        <view class="k-text-c3">The instant on-demand Atomic CSS engine.</view>
      </view>
    </view>

    <view class="k-flex k-mb-2 k-mt-4">
      <view class="k-text-lg k-text-c2" mr-4>切换 class</view>
      <view class="k-bg-#3498db/20 k-text-#3498db k-rounded" k-p="x2 y1" @click="switchFlag">点我切换</view>
    </view>

    <view
      class="k-p-5 k-rounded-xl k-shadow-md k-flex k-items-center k-mx-auto"
      :class="[flag ? 'k-bg-white' : 'k-bg-green']">
      <view>
        <view
          class="k-h-100 k-w-100 k-bg-cover k-bg-[url(https://img.cdn.sugarat.top/mdImg/MTY2ODA4OTc3MjcyMg==unocss-icon-gray.svg)]" />
      </view>
      <view class="k-ml-5">
        <view class="k-text-xl">UnoCSS</view>
        <view class="k-text-c3">The instant on-demand Atomic CSS engine.</view>
      </view>
    </view>

    <view k-text="lg c2" k-m="b2 t4">使用 Attributify mode </view>
    <view rounded-xl shadow-md flex items-center mx-auto p-5 bg-white>
      <view>
        <view
          k-bg="cover [url(https://img.cdn.sugarat.top/mdImg/MTY2ODA4OTc3MjcyMg==unocss-icon-gray.svg)]"
          class="k-h-100 k-w-100" />
      </view>
      <view ml-5>
        <view k-text="xl c1">UnoCSS</view>
        <view text-c3>The instant on-demand Atomic CSS engine.</view>
      </view>
    </view>

    <view k-text="lg c3" k-m="b2 t4">基础动画</view>
    <view flex justify-center items-center my-2>
      <view
        w-100
        h-100
        m-3
        k-animate="iteration-infinite swing"
        bg-cover
        class="k-bg-[url(https://img.cdn.sugarat.top/mdImg/MTY2ODA4OTc3MjcyMg==unocss-icon-gray.svg)]"></view>

      <view
        w-100
        h-100
        m-3
        bg-cover
        k-animate="pulse-bck"
        class="k-bg-[url(https://img.cdn.sugarat.top/mdImg/MTY2ODA4OTc3MjcyMg==unocss-icon-gray.svg)]"></view>

      <view
        k-animate="rubber-band iteration-infinite"
        class="k-w-100 k-h-100 k-m-3 k-bg-cover k-bg-[url(https://img.cdn.sugarat.top/mdImg/MTY2ODA4OTc3MjcyMg==unocss-icon-gray.svg)]"></view>
    </view>
  </view>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const flag = ref(true)

function switchFlag() {
  flag.value = !flag.value
}
</script>
