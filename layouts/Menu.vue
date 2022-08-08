<template>
  <div class="dark:bg-gray-800 dark:text-gray-200">

    <div class="body-font font-Thasadith">
      <div>
        <Menu2 style="z-index: 101;" />
        <div>
          <div style="z-index: 100;" class="max-w-8xl mx-auto px-4 ">
            <div :class="$nuxt.$store.state.menu == true ? hide == true ? 'animate-fade-out' : '' : 'hidden'"
              class="pt-1 dark:bg-gray-900 animate-fade-in bg-gray-100 border-gray-300 border-r dark:border-gray-700 dark:text-gray-200 lg:block fixed z-20 inset-0 top-[3.8125rem] left-[max(0px,calc(50%-45rem))] right-auto w-[19.5rem] pb-10 px-8 overflow-y-auto">

              <nav id="nav" class="select-none lg:text-sm lg:leading-6 relative mt-2">
                <div v-if="hide == true" class="md:hidden flex h-full fixed top-0 right-0 left-0"></div>
                <ul>
                  <li class="text-center">
                    <div class="py-3 px-4">
                      <nuxt-img provider="imgix" class="w-32 h-32 rounded-full m-auto dark:bg-white" src="/Intarat.png"
                        alt="Intarat" />
                    </div>
                    <h1 class="text-xl">Intarat Mekloy</h1>
                    <h2 class="text-sm dark:text-gray-400">Web Developer</h2>
                  </li>
                  <li class="text-center mt-2 mb-2 ">
                    <span @click="menuhide">
                      <NuxtLink to="/" @click="menuhide"
                        :class="$route.name == 'index' ? 'border-b border-sky-400 dark:border-sky-400' : ''"
                        class="group justify-center  items-center lg:text-sm lg:leading-6 mb-4 font-semibold  text-sky-400 dark:text-sky-400 dark:hover:text-sky-500 hover:text-sky-500 transition-all">
                        <span class="">Home</span>
                      </NuxtLink>
                    </span>
                  </li>
                  <li class="text-center mt-2 mb-2 ">
                    <span @click="menuhide">
                      <NuxtLink to="/About" @click="menuhide"
                        :class="$route.name == 'About' ? 'border-b border-sky-400 dark:border-sky-400' : ''"
                        class="group justify-center  items-center lg:text-sm lg:leading-6 mb-4 font-semibold text-sky-400 dark:text-sky-400 dark:hover:text-sky-500 hover:text-sky-500 transition-all">
                        <span class="">About</span>
                      </NuxtLink>
                    </span>
                  </li>
                  <li class="text-center mt-2 mb-2 ">
                    <span @click="menuhide">
                      <NuxtLink @click="menuhide" to="/Skill"
                        :class="$route.name == 'Skill' ? 'border-b border-sky-400 dark:border-sky-400' : ''"
                        class="group justify-center  items-center lg:text-sm lg:leading-6 mb-4 font-semibold text-sky-400 dark:text-sky-400 dark:hover:text-sky-500 hover:text-sky-500 transition-all">
                        <span class="">Skill</span>
                      </NuxtLink>
                    </span>
                  </li>
                  <li class="text-center mt-2 mb-2 ">
                    <span @click="menuhide">
                      <NuxtLink @click="menuhide" to="/Contact"
                        :class="$route.name == 'Contact' ? 'border-b border-sky-400 dark:border-sky-400' : ''"
                        class="group justify-center  items-center lg:text-sm lg:leading-6 mb-4 font-semibold text-sky-400 dark:text-sky-400 dark:hover:text-sky-500 hover:text-sky-500 transition-all">
                        <span class="">Contact</span>
                      </NuxtLink>
                    </span>
                  </li>
                </ul>
              </nav>
            </div>
            <div class="lg:pl-[19.5rem]">
              <div class="max-w-3xl mx-auto pt-20 xl:max-w-none xl:ml-0  xl:pr-16">
                <Nuxt class="ml-2 mb-16 md:mb-2" />

              </div>
            </div>
          </div>
        </div>
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
      showHideSpinner: true,
      hide: false
    }
  },
  methods: {
    menuhide() {
      this.hide = true
      setTimeout(() => {
        this.$nuxt.$store.commit("menu", false);
        this.hide = false
      }, 400)
    },
    async getuser() {
      /* liffId จาก Line  */
      await liff.init({ liffId: `1657325116-MR5lQD7n` }).catch(err => { throw err });
      if (liff.isLoggedIn()) {
        let getProfile = await liff.getProfile();

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
      /*
        document.querySelector("body").style.cssText = "overflow:hidden";
        this.showHideSpinner = true;
       */
    }
  },
  created() {
    if (process.client) {
      console.log()
      /*
      
      this.getuser()
      

    
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
