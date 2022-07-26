<template>
  <div>
    <LoadSpinner v-if="showHideSpinner" />
    <div class="body-font font-Thasadith">
      <div>
        <Menu2 />
      </div>

      <div class="px-4 mx-auto w-full max-w-8xl" style="margin-top: 90px; margin-bottom: 80px">
        <Nuxt />
      </div>

    </div>
  </div>
</template>

<script>


export default {


  data() {
    return {
      Load: false,
      CookieAllow: "",
      showHideSpinner: true
    }
  },
  methods: {
    async getuser() {
      /* liffId จาก Line */
      await liff.init({ liffId: `1657325116-MR5lQD7n` }).catch(err => { throw err });
      if (liff.isLoggedIn()) {
        let getProfile = await liff.getProfile();
        /*เก็บ ข้อมูลลง store user*/
        this.$nuxt.$store.commit("user", getProfile);
        
        setTimeout(() => {
          document.querySelector("body").style.cssText = "";
          this.showHideSpinner = false;
        }, 1000)
      } else {
        liff.login();
      }
    }
  },
  mounted() {
    if (process.client && window) {
      window.history.scrollRestoration = "auto";
    }
  },
  beforeDestroy() { },
  beforeCreate() {
    if (process.client) {
      document.querySelector("body").style.cssText = "overflow:hidden";
      this.showHideSpinner = true;
    }
  },
  created() {
    if (process.client) {
      this.getuser()

      /*
            if (!Cookies.get("TOKEN_ID")) {
                const path = encodeURIComponent(this.$route.path);
                this.$router.push(`/?r=${path}`);
            } else {
                this.Load = true
            }
*/
    }
  },
  destroyed() { },
};
</script>

<style>
</style>
