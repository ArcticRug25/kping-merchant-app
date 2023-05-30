<script setup lang="ts">
import { onLaunch } from '@dcloudio/uni-app'

uni.setLocale('en')
onLaunch(() => {
  console.log('App Launch')
})
</script>
<style>
/* #ifdef APP-NVUE */
@import './tmui/scss/nvue.css';
/* #endif */
/* #ifndef APP-NVUE */
@import './tmui/scss/noNvue.css';
/* #endif */

/* #ifdef H5 */

body::-webkit-scrollbar,
div::-webkit-scrollbar,
*::-webkit-scrollbar {
  display: none;
}

body.pages-index-index uni-page-body,
body {
  padding-bottom: 0 !important;
}

/* text {
  font-family: 'sans-serif';
} */

/* :root {
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace !important;
} */
:root {
  font-family: Arial, sans-serif;
}
/* #endif */
</style>
