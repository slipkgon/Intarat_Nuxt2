<template>
  <div>

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

    };
  },

  methods: {},
  mounted() {
    if (process.client) {

    }

    if (process.client && window) {
      window.history.scrollRestoration = "auto";
    }
  },
  beforeDestroy() { },
  beforeCreate() {

  },
  created() {
    if (process.client) {


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
