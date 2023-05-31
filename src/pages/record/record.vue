<template>
  <tm-app class="k-bg-#f5f5f5 k-w-screen k-min-h-screen">
    <tm-navbar title="Record" color="#5064eb" :shadow="8" hideHome></tm-navbar>
    <tm-result :showBtn="false" subTitle=" " title="No Data" :size="240"></tm-result>
  </tm-app>
</template>
<script setup lang="ts">
const list = ref([
  { text: 'Scan Record', id: '1' },
  { text: 'Input Record', id: '2' },
])
const { width } = uni.$tm.u.getWindow()
</script>
<style lang="scss" scoped></style>
