<template>
  <div class="dark:bg-gray-800 dark:text-gray-200">

    <div class="body-font font-Thasadith">
      <div>
        <Menu2 style="z-index: 101;" />
        <div>
          <div style="z-index: 100;" class="max-w-8xl mx-auto px-4 ">
            <div :class="$nuxt.$store.state.menu == true ? hide == true ? 'animate-fade-out' : '' : 'hidden'"
              class="no-scrollbar pt-1 dark:bg-gray-900 animate-fade-in bg-gray-100 border-gray-300 border-r dark:border-gray-700 dark:text-gray-200 lg:block fixed z-20 inset-0 top-[3.8125rem] left-[max(0px,calc(50%-45rem))] right-auto w-[19.5rem] pb-20 px-8 overflow-y-auto ">

              <nav id="nav" class="z-10 select-none lg:text-sm lg:leading-6 relative mt-2">
                <div v-if="hide == true" class="md:hidden flex h-full fixed top-0 right-0 left-0"></div>
                <ul>
                  <li class="text-center">
                    <div class="py-3 px-4">
                      <nuxt-img width="128" height="161" provider="imgix"
                        class="rounded m-auto bg-white border border-gray-300 dark:border-gray-700" src="/Intarat.png"
                        alt="Intarat" />
                    </div>
                    <h1 class="text-xl">Intarat Mekloy</h1>
                    <h2 class="text-sm dark:text-gray-400">Web Developer</h2>
                  </li>
                  <hr class="mt-2 border-gray-700/50 dark:border-gray-400/50" />
                  <li class="ml-4 mt-2 mb-2 ">
                    <span @click="menuhide">
                      <NuxtLink to="/" class="w-full dark:focus:text-white dark:hover:text-white  flex text-center p-1"
                        style="align-items: center;">
                        <svg width="15" height="15" viewBox="0 0 16 16" class="justify-center inline-block">
                          <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                            <path
                              :d="$route.name == 'index' ? 'M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5z' : 'M8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4.5a.5.5 0 0 0 .5-.5v-4h2v4a.5.5 0 0 0 .5.5H14a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146zM2.5 14V7.707l5.5-5.5 5.5 5.5V14H10v-4a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v4H2.5z'"
                              fill="currentColor"></path>
                          </g>
                        </svg>

                        <span class="tab tab-home block text-xs md:text-sm ml-4">Home</span>
                      </NuxtLink>
                    </span>
                  </li>
                  <li class="ml-4 mt-2 mb-2 ">
                    <span @click="menuhide">
                      <NuxtLink to="/About"
                        class="w-full dark:focus:text-white dark:hover:text-white  flex text-center p-1"
                        style="align-items: center;">
                        <svg width="15" height="15" viewBox="0 0 16 16" class="justify-center inline-block">
                          <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">

                            <path
                              :d="$route.name == 'About' ? 'M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4.414a1 1 0 0 0-.707.293L.854 15.146A.5.5 0 0 1 0 14.793V2zm5 4a1 1 0 1 0-2 0 1 1 0 0 0 2 0zm4 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0zm3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2z' : 'M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H4.414A2 2 0 0 0 3 11.586l-2 2V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12.793a.5.5 0 0 0 .854.353l2.853-2.853A1 1 0 0 1 4.414 12H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z'"
                              fill="currentColor"></path>
                            <path v-if="$route.name != 'About'"
                              d="M3 3.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zM3 6a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9A.5.5 0 0 1 3 6zm0 2.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5z"
                              fill="currentColor" />
                          </g>
                        </svg>

                        <span class="tab tab-home block text-xs md:text-sm ml-4">About</span>
                      </NuxtLink>
                    </span>
                  </li>
                  <li class="ml-4 mt-2 mb-2 ">
                    <span @click="menuhide">
                      <NuxtLink to="/Skill"
                        class="w-full dark:focus:text-white dark:hover:text-white  flex text-center p-1"
                        style="align-items: center;">
                        <svg width="15" height="15" viewBox="0 0 16 16" class="inline-block justify-center">
                          <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                            <path
                              :d="$route.name == 'Skill' ? 'M8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783z' : 'M1 2.828c.885-.37 2.154-.769 3.388-.893 1.33-.134 2.458.063 3.112.752v9.746c-.935-.53-2.12-.603-3.213-.493-1.18.12-2.37.461-3.287.811V2.828zm7.5-.141c.654-.689 1.782-.886 3.112-.752 1.234.124 2.503.523 3.388.893v9.923c-.918-.35-2.107-.692-3.287-.81-1.094-.111-2.278-.039-3.213.492V2.687zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783z'"
                              fill="currentColor"></path>
                          </g>
                        </svg>

                        <span class="tab tab-home block text-xs md:text-sm ml-4">Skill</span>
                      </NuxtLink>
                    </span>
                  </li>
                  <li class="ml-4 mt-2 mb-2 ">
                    <span @click="menuhide">
                      <NuxtLink to="/Contact"
                        class="w-full dark:focus:text-white dark:hover:text-white flex text-center p-1"
                        style="align-items: center;">
                        <svg width="15" height="15" viewBox="0 0 576 512" class="inline-block justify-center ">
                          <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                            <path
                              :d="$route.name == 'Contact' ? 'M512 32H64C28.65 32 0 60.65 0 96v320c0 35.35 28.65 64 64 64h448c35.35 0 64-28.65 64-64V96C576 60.65 547.3 32 512 32zM176 128c35.35 0 64 28.65 64 64s-28.65 64-64 64s-64-28.65-64-64S140.7 128 176 128zM272 384h-192C71.16 384 64 376.8 64 368C64 323.8 99.82 288 144 288h64c44.18 0 80 35.82 80 80C288 376.8 280.8 384 272 384zM496 320h-128C359.2 320 352 312.8 352 304S359.2 288 368 288h128C504.8 288 512 295.2 512 304S504.8 320 496 320zM496 256h-128C359.2 256 352 248.8 352 240S359.2 224 368 224h128C504.8 224 512 231.2 512 240S504.8 256 496 256zM496 192h-128C359.2 192 352 184.8 352 176S359.2 160 368 160h128C504.8 160 512 167.2 512 176S504.8 192 496 192z' : 'M208 256c35.35 0 64-28.65 64-64c0-35.35-28.65-64-64-64s-64 28.65-64 64C144 227.3 172.7 256 208 256zM464 232h-96c-13.25 0-24 10.75-24 24s10.75 24 24 24h96c13.25 0 24-10.75 24-24S477.3 232 464 232zM240 288h-64C131.8 288 96 323.8 96 368C96 376.8 103.2 384 112 384h192c8.836 0 16-7.164 16-16C320 323.8 284.2 288 240 288zM464 152h-96c-13.25 0-24 10.75-24 24s10.75 24 24 24h96c13.25 0 24-10.75 24-24S477.3 152 464 152zM512 32H64C28.65 32 0 60.65 0 96v320c0 35.35 28.65 64 64 64h448c35.35 0 64-28.65 64-64V96C576 60.65 547.3 32 512 32zM528 416c0 8.822-7.178 16-16 16H64c-8.822 0-16-7.178-16-16V96c0-8.822 7.178-16 16-16h448c8.822 0 16 7.178 16 16V416z'"
                              fill="currentColor"></path>
                          </g>

                        </svg>

                        <span class="tab tab-home block text-xs md:text-sm ml-4">Contact</span>
                      </NuxtLink>
                    </span>
                  </li>
                </ul>
              </nav>
              <hr class="p-2 mt-2 border-gray-700/50 dark:border-gray-400/50" />
              <div class="justify-center items-center bottom-0 flex">
                <div v-if="!$nuxt.$store.state.user" id="web-login-button"
                  class="m-auto p-2 center-block text-center area-margin animate-fade-in">
                  <span @click="login" class="cursor-pointer center-block m-auto"></span>
                </div>

                <div class="inline-flex p-2 border rounded-lg border-gray-300 dark:border-gray-700 animate-fade-in"
                  v-if="$nuxt.$store.state.user">
                  <nuxt-img :provider="$nuxt.$store.state.user.pictureUrl ? '' : 'imgix'" class="w-14 h-14 rounded-lg"
                    :src="$nuxt.$store.state.user.pictureUrl != '' ? $nuxt.$store.state.user.pictureUrl : '/user.png'"
                    alt=" User" />

                  <div class="pl-3" style="align-self: center">
                    <div class="break-all block text-sm text-gray-700   dark:text-gray-300">
                      {{ $nuxt.$store.state.user.displayName }}
                    </div>
                    <div class="break-all block text-xs ">
                      <span @click="logout" class="text-red-500 hover:text-red-600">ออกจากระบบ</span>
                    </div>
                  </div>
                </div>
              </div>
              <hr class="p-2 mt-2 border-gray-700/50 dark:border-gray-400/50" />
              <div class="text-center">
                <a href="https://www.facebook.com/Accidomz" rel="Intarat facebook" target="_blank"
                  aria-label="Intarat facebook" title="Intarat facebook" class="inline-block m-1">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"
                    class="w-6 h-6 text-gray-700   dark:text-gray-300" viewBox="0 0 16 16">
                    <path
                      d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                  </svg>
                </a>
                <a href="https://line.me/ti/p/~intarat_mek" rel="Intarat Line" target="_blank" aria-label="Intarat Line"
                  title="Intarat Line" class="inline-block m-1">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"
                    class="w-6 h-6 text-gray-700   dark:text-gray-300" viewBox="0 0 16 16">
                    <path
                      d="M8 0c4.411 0 8 2.912 8 6.492 0 1.433-.555 2.723-1.715 3.994-1.678 1.932-5.431 4.285-6.285 4.645-.83.35-.734-.197-.696-.413l.003-.018.114-.685c.027-.204.055-.521-.026-.723-.09-.223-.444-.339-.704-.395C2.846 12.39 0 9.701 0 6.492 0 2.912 3.59 0 8 0ZM5.022 7.686H3.497V4.918a.156.156 0 0 0-.155-.156H2.78a.156.156 0 0 0-.156.156v3.486c0 .041.017.08.044.107v.001l.002.002.002.002a.154.154 0 0 0 .108.043h2.242c.086 0 .155-.07.155-.156v-.56a.156.156 0 0 0-.155-.157Zm.791-2.924a.156.156 0 0 0-.156.156v3.486c0 .086.07.155.156.155h.562c.086 0 .155-.07.155-.155V4.918a.156.156 0 0 0-.155-.156h-.562Zm3.863 0a.156.156 0 0 0-.156.156v2.07L7.923 4.832a.17.17 0 0 0-.013-.015v-.001a.139.139 0 0 0-.01-.01l-.003-.003a.092.092 0 0 0-.011-.009h-.001L7.88 4.79l-.003-.002a.029.029 0 0 0-.005-.003l-.008-.005h-.002l-.003-.002-.01-.004-.004-.002a.093.093 0 0 0-.01-.003h-.002l-.003-.001-.009-.002h-.006l-.003-.001h-.004l-.002-.001h-.574a.156.156 0 0 0-.156.155v3.486c0 .086.07.155.156.155h.56c.087 0 .157-.07.157-.155v-2.07l1.6 2.16a.154.154 0 0 0 .039.038l.001.001.01.006.004.002a.066.066 0 0 0 .008.004l.007.003.005.002a.168.168 0 0 0 .01.003h.003a.155.155 0 0 0 .04.006h.56c.087 0 .157-.07.157-.155V4.918a.156.156 0 0 0-.156-.156h-.561Zm3.815.717v-.56a.156.156 0 0 0-.155-.157h-2.242a.155.155 0 0 0-.108.044h-.001l-.001.002-.002.003a.155.155 0 0 0-.044.107v3.486c0 .041.017.08.044.107l.002.003.002.002a.155.155 0 0 0 .108.043h2.242c.086 0 .155-.07.155-.156v-.56a.156.156 0 0 0-.155-.157H11.81v-.589h1.525c.086 0 .155-.07.155-.156v-.56a.156.156 0 0 0-.155-.157H11.81v-.589h1.525c.086 0 .155-.07.155-.156Z" />
                  </svg>
                </a>
              </div>

            </div>

            <div v-if="$nuxt.$store.state.menu == true" @click="menuhide"
              class="md:hidden z-0 flex h-full fixed top-0 right-0 left-0"></div>
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
    logout() {
      if (liff.isLoggedIn()) {
        this.$nuxt.$store.commit("user", "");
        liff.logout();
      }
    },
    async login() {
      await liff.init({ liffId: `1657369059-JnLp4RpO` }).catch(err => { throw err });
      if (liff.isLoggedIn()) {
        let getProfile = await liff.getProfile();

        this.$nuxt.$store.commit("user", getProfile);


      } else {
        liff.login();
      }
    },
    async getuser() {
      /* liffId จาก Line  */
      await liff.init({ liffId: `1657369059-JnLp4RpO` }).catch(err => { throw err });
      if (liff.isLoggedIn()) {
        let getProfile = await liff.getProfile();

        this.$nuxt.$store.commit("user", getProfile);


      } else {

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
