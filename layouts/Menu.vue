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
      <div v-if="CookieAllow != 'YES'">
        <CookiesAllow />
      </div>
    </div>
  </div>
</template>

<script>
const Cookies = process.client ? require("js-cookie") : undefined;

export default {
  data() {
    return {
      Load: false,
      CookieAllow: "",
      showHideSpinner: true,
    };
  },

  methods: {},
  mounted() {
    if (process.client) {
      setTimeout(() => {
        document.querySelector("body").style.cssText = "";
        this.showHideSpinner = false;
      }, 2000);
    }

    if (process.client && window) {
      window.history.scrollRestoration = "auto";
    }
  },
  beforeDestroy() { },
  beforeCreate() {
    document.querySelector("body").style.cssText = "overflow:hidden";
    this.showHideSpinner = true;
  },
  created() {
    if (process.client) {
      if (Cookies.get("CookieAllow")) {
        this.CookieAllow = Cookies.get("CookieAllow");
      }

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
