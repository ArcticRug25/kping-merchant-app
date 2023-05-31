<template>
  <tm-app class="k-w-screen k-h-screen important-k-bg-white">
    <!-- 登录背景 -->
    <view class="login-bg k-bg-#5463E3 k-w-full k-h-466 k-z-2" :style="{ paddingTop: statusBarHeight + 'px' }">
      <view class="k-relative k-z-3 k-text-white k-h-66rpx k-h-66 k-center k-text-base">Welcome</view>
    </view>

    <view class="k-w-94vw k-bg-white k-rounded-lg k-mx-auto k-relative -k-top-150 k-h-800 k-z-3">
      <!-- 图片logo -->
      <image
        class="k-absolute k-z-4 k-right-0 k-w-440 k-h-285 -k-right-50 -k-top-200"
        src="@/static/images/banner-icon.png" />
      <view class="k-h-160rpx k-relative k-w-380rpx k-box-border k-px-2">
        <view class="k-flex k-items-center k-full">
          <view class="k-text-#5064eb k-flex-1 k-center k-h-full" @click="toggleNav(0)">
            <text class="nav" :class="[active ? 'nav' : 'active-nav']">Login</text>
          </view>
          <view class="k-text-#5064eb k-flex-1 k-center k-h-full" @click="toggleNav(1)">
            <text class="nav" :class="[active ? 'active-nav' : 'nav']">Register</text>
          </view>
        </view>
        <view class="k-absolute k-bottom-30">
          <view
            class="k-h-7rpx k-w-32rpx k-rounded k-bg-#5064eb k-transition k-duration-300"
            :style="{ transform: active ? `translateX(${180 + 67.5}rpx)` : `translateX(${70}rpx)` }"></view>
        </view>
      </view>
      <view class="login-form k-w-full k-relative k-box-border k-px-4 k-mt-2">
        <tm-input
          class="login-input phone-input"
          color="#EEF0FC"
          :round="25"
          :height="90"
          v-model="phone"
          :shadow="2"
          fontColor="#5463E3"
          prefix-color="#5463E3"
          prefix="tmicon-mobile-alt"
          placeholderStyle="color: #5463E3;">
          <template #left>
            <view class="k-absolute k-flex k-items-center k-left-45rpx k-z6" @click="handleChooseAreaCode">
              <view
                class="k-align-middle k-mr-8rpx k-w-90rpx k-text-28rpx k-text-center"
                :style="{ color: areaCode ? '#5463E3' : '#ccc' }">
                {{ areaCode ? '+' + areaCode : 'Area' }}
              </view>
              <view class="k-h-40rpx k-w-1px k-border-l k-border-#ccc"></view>
            </view>
          </template>
        </tm-input>
        <tm-input
          v-if="isPassword"
          :margin="[0, 40, 0, 0]"
          :height="90"
          :round="25"
          :shadow="2"
          class="login-password-input"
          color="#EEF0FC"
          fontColor="#5463E3"
          placeholder="Please enter your passport"
          type="password"
          prefix-color="#5463E3"
          prefix="tmicon-lock-fill"
          placeholderStyle="color: #5463E3;"></tm-input>
        <view v-else class="k-flex k-items-center k-justify-between k-w-full k-mt-40rpx">
          <tm-input
            :height="90"
            :round="25"
            :shadow="2"
            v-model="authCode"
            class="login-password-input k-w-400rpx"
            color="#EEF0FC"
            fontColor="#5463E3"
            prefix-color="#5463E3"
            placeholder="Authentication code"
            showClear
            placeholderStyle="color: #5463E3;"
            prefix="tmicon-lock-fill">
          </tm-input>
          <tm-button
            class="send-btn"
            :width="200"
            :height="75"
            color="#5763DB"
            :margin="[0]"
            @click="sendCode"
            :disabled="codeStatus"
            :style="{ opacity: codeStatus ? 0.5 : 1 }"
            :label="codeStatus ? code + 's' : 'Send'"></tm-button>
        </view>
        <view class="k-flex k-w-full k-justify-end k-mt-2 k-absolute k-right-30 -k-bottom-40" v-if="!active">
          <tm-text color="#9E9E9E" :font-size="24" @click="isPassword = !isPassword">{{
            isPassword ? 'Authentication Code' : 'Password'
          }}</tm-text>
        </view>
      </view>
      <view class="k-w-full k-box-border k-px-4 k-mt-1">
        <tm-button
          class="important-k-w-full"
          color="#5463E3"
          fontColor="#EEF0FC"
          :round="25"
          :height="90"
          :fontSize="32"
          :fontWeight="500"
          :margin="[0, 120]"
          @click="active ? handleRegister() : handleLogin()"
          >{{ active ? 'Register' : 'Login' }}</tm-button
        >
      </view>
    </view>
    <!-- 错误提示 -->
    <tm-notification color="#E04835" class="error-tip" placement="top" ref="msg" :duration="2000"></tm-notification>
  </tm-app>
</template>

<script setup lang="ts">
import tmNotification from '@/tmui/components/tm-notification/tm-notification.vue'
import { UserAuth, EventEmit } from '@/enum/index'

defineOptions({
  name: 'LoginPage',
})
const { statusBarHeight } = uni.$tm.u.getWindow()
const stickyOffset = ref('0')
stickyOffset.value = `${statusBarHeight}px`
const active = ref(0)
const phone = ref('189')
// 验证码
const authCode = ref('')
// 密码登录还是验证码登录
const isPassword = ref(false)

// 手机区域码
const { areaCode } = toRefs(useUserStore())

// 验证码倒计时功能
const { code, codeStatus, countDown } = useCode()

const msg = ref<InstanceType<typeof tmNotification> | null>(null)

// 输入错误提示
function errorTip(error: string) {
  nextTick(() => {
    msg.value?.show({ label: error })
  })
}

// 验证表单
const validateForm = (isSend: boolean): boolean => {
  if (!areaCode) {
    errorTip('Please select the area code')
    return false
  }

  if (!uni.$tm.u.isPhone(phone.value)) {
    errorTip('Please enter the correct phone number.')
    return false
  }

  if (!isSend && authCode.value.length < 6) {
    errorTip('Please enter the correct verification code.')
    return false
  }
  return true
}

// 切换登录注册
const toggleNav = (index: number) => {
  if (index === active.value) return
  active.value = index
  if (active.value && isPassword.value) {
    isPassword.value = false
  }
}

// 发送验证码
const sendCode = () => {
  const isRight = validateForm(true)
  if (isRight) {
    countDown()
  }
}

// 选择区域码
const handleChooseAreaCode = () => {
  uni.navigateTo({
    url: '/pages/login/areaCode',
  })
}

// 登录
const handleLogin = () => {
  // const isRight = validateForm(false)
  // const userStore = useUserStore()
  // userStore.token = 'Success'
  uni.navigateBack()
  // if (!isRight) return
  if (isPassword.value) {
    // 密码登录
  } else {
    // 验证码登录
  }
}

// 注册
const handleRegister = () => {
  const userStore = useUserStore()
  userStore.token = 'Success'
  uni.$emit(EventEmit.HANDLE_USER_LOGIN, UserAuth.REGISTER)
  uni.navigateTo({
    url: '/pages/merchantForm/merchantForm',
  })
}
</script>

<style lang="scss" scoped>
.nav {
  color: #333333;
  font-size: 32rpx;
  transition: all 300ms;
}
.active-nav {
  color: #5064eb;
  transform: scale(1.35);
}

.login-input,
.login-password-input {
  &.phone-input {
    ::v-deep input {
      position: relative;
      margin-left: 120rpx;
    }
  }
}

.login-password-input {
  ::v-deep input {
    margin-left: 18rpx;
  }
}

.error-tip {
  top: v-bind(stickyOffset) !important;
}
</style>
