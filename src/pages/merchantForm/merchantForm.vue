<template>
  <tm-app class="k-bg-#f5f5f5 k-w-screen k-min-h-screen">
    <tm-navbar title="Form" color="#5064eb" :shadow="8" hideHome></tm-navbar>
    <tm-form @submit="confirm" @reset="handleReset" ref="form" v-model="merchantForm" :label-width="190">
      <tm-sheet :margin="[24, 20, 0, 0]" :padding="[0, 0]">
        <tm-text color="#2a2a2a" class="k-font-bold" :font-size="32">Company Infos:</tm-text>
      </tm-sheet>
      <tm-form-item
        required
        label="Company Name"
        :labelWidth="0"
        field="companyName"
        :margin="[0, 0]"
        :rules="[
          { required: true, message: 'Cannot be empty', validator: (val:any) => val.length > 0 }
        ]">
        <tm-input
          :inputPadding="[0, 0]"
          v-model.lazy="merchantForm.companyName"
          :transprent="true"
          :showBottomBotder="false"
          placeholder="Please enter content">
        </tm-input>
      </tm-form-item>
      <tm-form-item
        required
        label="UEN No."
        :margin="[0, 0]"
        :labelWidth="0"
        field="UENNo"
        :rules="[
          { required: true, message: 'Cannot be empty', validator: (val:any) => val.length > 0 }
        ]">
        <tm-input
          :inputPadding="[0, 0]"
          v-model.lazy="merchantForm.UENNo"
          :transprent="true"
          :showBottomBotder="false"
          placeholder="Please enter content">
        </tm-input>
      </tm-form-item>
      <tm-form-item
        required
        label="Address"
        :margin="[0, 0]"
        :labelWidth="0"
        field="address"
        :rules="[
          { required: true, message: 'Cannot be empty', validator: (val:any) => val.length > 0 }
        ]">
        <tm-input
          :inputPadding="[0, 0]"
          v-model.lazy="merchantForm.address"
          :transprent="true"
          placeholder="Please enter content"
          :showBottomBotder="false">
        </tm-input>
      </tm-form-item>
      <tm-form-item
        required
        label="Postal Code"
        :margin="[0, 0]"
        :labelWidth="0"
        field="postalCode"
        :rules="[
          { required: true, message: 'Cannot be empty', validator: (val:any) => val.length > 0 }
        ]">
        <tm-input
          :inputPadding="[0, 0]"
          v-model.lazy="merchantForm.postalCode"
          :transprent="true"
          placeholder="Please enter content"
          :showBottomBotder="false">
        </tm-input>
      </tm-form-item>
      <tm-form-item
        required
        label="Company Email"
        :margin="[0, 0]"
        :labelWidth="0"
        field="comanyEmail"
        :rules="[
          { required: true, message: 'Cannot be empty', validator: (val:any) => val.length > 0 }
        ]">
        <tm-input
          :inputPadding="[0, 0]"
          v-model.lazy="merchantForm.comanyEmail"
          :transprent="true"
          placeholder="Please enter content"
          :showBottomBotder="false">
        </tm-input>
      </tm-form-item>
      <tm-form-item
        required
        label="Contact Number"
        :margin="[0, 0]"
        :labelWidth="0"
        field="contactNumber"
        :rules="[
          { required: true, message: 'Cannot be empty', validator: (val:any) => val.length > 0 }
        ]">
        <tm-input
          :inputPadding="[0, 0]"
          v-model.lazy="merchantForm.contactNumber"
          :transprent="true"
          placeholder="Please enter content"
          :showBottomBotder="false">
        </tm-input>
      </tm-form-item>
      <tm-form-item label="Website" :margin="[0, 0]" :labelWidth="0" field="website">
        <tm-input
          :inputPadding="[0, 0]"
          v-model.lazy="merchantForm.website"
          :transprent="true"
          placeholder="Please enter content"
          :showBottomBotder="false">
        </tm-input>
      </tm-form-item>

      <tm-form-item
        required
        label="Upload image"
        field="merchantImage"
        :rules="{ required: true, message: 'Please upload store image' }">
        <tm-upload
          :rows="3"
          color="#ccc"
          :width="420"
          url="https://mockapi.eolink.com/tNYKNA7ac71aa90bcbe83c5815871a5b419601e96a5524d/upload"
          :maxFile="3"
          :default-value="merchantForm.merchantImage"
          v-model="merchantForm.merchantImage"></tm-upload>
      </tm-form-item>
      <tm-sheet :margin="[24, 60, 0, 0]" :padding="[0, 0]">
        <tm-text color="#2a2a2a" class="k-font-bold" :font-size="32">Contact Person: </tm-text>
      </tm-sheet>
      <tm-form-item
        required
        label="Name"
        :margin="[0, 0]"
        :labelWidth="0"
        field="contactName"
        :rules="[
          { required: true, message: 'Cannot be empty', validator: (val:any) => val.length > 0 }
        ]">
        <tm-input
          :inputPadding="[0, 0]"
          v-model.lazy="merchantForm.contactName"
          :transprent="true"
          placeholder="Please enter content"
          :showBottomBotder="false">
        </tm-input>
      </tm-form-item>
      <tm-form-item
        required
        label="Contact Number"
        :margin="[0, 0]"
        :labelWidth="0"
        field="contactPersonNumber"
        :rules="[
          { required: true, message: 'Cannot be empty', validator: (val:any) => val.length > 0 }
        ]">
        <tm-input
          :inputPadding="[0, 0]"
          v-model.lazy="merchantForm.contactPersonNumber"
          :transprent="true"
          placeholder="Please enter content"
          :showBottomBotder="false">
        </tm-input>
      </tm-form-item>
      <tm-form-item
        required
        label="Email"
        :margin="[0, 0]"
        :labelWidth="0"
        field="email"
        :rules="[
          { required: true, message: 'Cannot be empty', validator: (val:any) => val.length > 0 }
        ]">
        <tm-input
          :inputPadding="[0, 0]"
          v-model.lazy="merchantForm.email"
          :transprent="true"
          placeholder="Please enter content"
          :showBottomBotder="false">
        </tm-input>
      </tm-form-item>
      <tm-form-item :border="false">
        <view class="flex flex-row">
          <view class="flex-1 mr-32">
            <tm-button form-type="submit" label="Submit" block></tm-button>
          </view>
          <view class="flex-1">
            <tm-button :shadow="0" text form-type="reset" label="Reset" block></tm-button>
          </view>
        </view>
      </tm-form-item>
    </tm-form>
    <tm-modal
      ref="modal"
      okText="Confirm"
      title=""
      okColor="#5464E3"
      text
      hideCancel
      :border="0"
      @ok="handleOk"
      v-model:show="showModal">
      <view class="k-col-center">
        <text class="i-bi-check-circle k-text-#76BB40 k-text-6xl"></text>
        <tm-text class="k-text-center k-mt-4" color="#999" :fontSize="28"
          >Submission successful, please wait for review</tm-text
        >
      </view>
    </tm-modal>
  </tm-app>
</template>
<script setup lang="ts">
import { useUserStore } from '@/store'
import tmApp from '@/tmui/components/tm-app/tm-app.vue'
import tmForm from '@/tmui/components/tm-form/tm-form.vue'
import tmModal from '@/tmui/components/tm-modal/tm-modal.vue'

const form = ref<InstanceType<typeof tmForm> | null>(null)
const modal = ref<InstanceType<typeof tmModal> | null>(null)
const userStore = useUserStore()
const merchantForm = ref({
  companyName: 'ManDangDang',
  merchantImage: [],
  UENNo: '231238',
  address: 'Singapore 54',
  postalCode: '26642',
  comanyEmail: 'mandangdang@126.com',
  contactNumber: '88828828',
  website: 'mandangdang.com',
  contactName: 'Peter',
  contactPersonNumber: '631231231',
  email: 'peter@126.com',
})
const showModal = ref(false)

const handleReset = () => {
  merchantForm.value = {
    companyName: '',
    merchantImage: [],
    UENNo: '',
    address: '',
    postalCode: '',
    comanyEmail: '',
    contactNumber: '',
    website: '',
    contactName: '',
    contactPersonNumber: '',
    email: '',
  }
  userStore.merchantForm = merchantForm.value
}

const confirm = (e: any) => {
  userStore.merchantForm = e.data
  console.log('e', e)
  if (e.isPass) {
    showModal.value = true
  }
}

const handleOk = () => {
  uni.navigateTo({
    url: '/pages/check/check',
  })
}
</script>
<style lang="scss" scoped></style>
