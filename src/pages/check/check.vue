<template>
  <tm-app class="k-bg-#f5f5f5 k-w-screen k-min-h-screen">
    <tm-navbar title="Result" color="#5064eb" :shadow="8" hideHome></tm-navbar>
    <tm-result
      status="warning"
      title="Please wait for review"
      subTitle="you can contact us 638387192"
      btnText="Back to modify form"
      @click="handleClick"></tm-result>
  </tm-app>
</template>
<script setup lang="ts">
const handleClick = () => {
  uni.navigateBack({
    delta: 1,
  })
}
</script>
<style lang="scss" scoped></style>
