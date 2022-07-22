<template>
  <div class="relative flex items-top justify-center min-h-screen bg-gray-100 items-center pt-0">
    <div class="grid grid-cols-1 col-span-1 row-span-1 justify-center">
      <NuxtLink :to="'/test'"
        class="p-4 bg-white rounded-lg border border-white hover:border-gray-200  hover:transition-all">
        ทดสอบ App
      </NuxtLink>

      <br />

      <span class="justify-center text-center">{{ test }}</span>
    </div>
  </div>
</template>

<script>
export default {
  layout: "default",
  head() {
    return {
      title: "Intarat | Home",
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        {
          hid: "Intarat Home",
          name: "Intarat Home",
          content: "Intarat Home",
        },
      ],
    };
  },
  data() {
    return {
      test: 'ไม่มีข้อมูล'
    }
  },
  methods: {
    async getuser() {
      await liff.init({ liffId: `1657325116-MR5lQD7n` }).catch(err => { throw err });
      if (liff.isLoggedIn()) {
        let getProfile = await liff.getProfile();
        this.test = getProfile
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
      this.getuser()
    }
  },
};
</script>
