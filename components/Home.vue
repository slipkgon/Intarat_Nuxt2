<!-- Please remove this file from your project -->
<template>
  <div class="body-font font-Thasadith">
    <div class="px-4 mx-auto w-full max-w-8xl" style="margin-top: 10px;">
      <div class="grid grid-flow-row auto-rows-max mx-8 my-8">
        <div v-if="user" class="p-6 bg-white rounded-lg   dark:bg-gray-800 dark:border-gray-700">
          <div class="flex justify-center p-6 ">
            <nuxt-img :provider="user.pictureUrl?'':'imgix'" @click="formImgShow = true;" class="cursor-pointer rounded max-h-56"
              :src="user.pictureUrl != '' ? user.pictureUrl : '/user.png'" alt="User" />
          </div>
          <div class="flex flex-col items-center pb-10 ">
            <h5 class="break-all mb-1 text-xl font-medium text-gray-900 dark:text-white">
              {{ user.displayName }} </h5>
          </div>
        </div>
        <div v-if="!user" class="p-6 bg-white rounded-lg   dark:bg-gray-800 dark:border-gray-700">
          <h5 class="text-center break-all mb-1 text-xl font-medium text-gray-900 dark:text-white">
            ไม่มีข้อมูล </h5>
        </div>

      </div>
    </div>
    <div v-if="formImgShow" id="popup-modal" tabindex="-1" style="background: #30303038; z-index: 1003"
      class="animate-fade-in overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-full justify-center items-center flex">
      <div @click="formImgShow = false" class="flex h-full fixed top-0 right-0 left-0"></div>
      <button type="button"
        class="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
        style="background: white; z-index: 100" @click="formImgShow = false">
        <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd"
            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
            clip-rule="evenodd"></path>
        </svg>
      </button>
      <div class="relative p-4 w-full h-auto" style="z-index: 99">
        <div class="relative dark:bg-gray-700">
          <nuxt-img style="margin: auto; max-height: 90vh" provider="imgix" class="mr-3"
            :src="user.pictureUrl != '' ? user.pictureUrl : '/user.png'" alt="User" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      user: '',
      formImgShow: false

    }
  },
  methods: {
    async getuser() {
      await liff.init({ liffId: `1657325116-MR5lQD7n` }).catch(err => { throw err });
      if (liff.isLoggedIn()) {
        let getProfile = await liff.getProfile();
        this.user = getProfile
      } else {
        liff.login();
      }
    }
  },
  mounted() {
    if (process.client && window) {
      window.history.scrollRestoration = 'auto';
    }
  },
  created() {
    if (process.client) {
     /*
      this.getuser()
      */
    }
  },
}
</script>
