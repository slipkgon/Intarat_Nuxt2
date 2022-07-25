<template>
  <nav
    class="border-b border-gray-200 px-2 sm:px-4 py-2.5 dark:bg-gray-800 transition-all text-gray-700 hover:bg-gray-700 hover:text-gray-700 "
    style="
      position: fixed;
      width: 100%;
      top: 0;background-color: white /*border-color: rgb(15 23 42/.1);*/
    ">
    <div :class="
      scrollPosition <= 100
        ? 'animate-fade-out hidden'
        : 'animate-fade-in block'
    " style="
        color: gray;
        bottom: 75px;
        right: 0;
        position: fixed;
        z-index: 1030;
        margin-bottom: 10px;
      ">
      <div style="margin-right: 5px">
        <button type="button" @click="top()"
          class="border focus:ring-4 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center">
          <svg class="w-4 h-4" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
            <path
              d="M374.6 246.6C368.4 252.9 360.2 256 352 256s-16.38-3.125-22.62-9.375L224 141.3V448c0 17.69-14.33 31.1-31.1 31.1S160 465.7 160 448V141.3L54.63 246.6c-12.5 12.5-32.75 12.5-45.25 0s-12.5-32.75 0-45.25l160-160c12.5-12.5 32.75-12.5 45.25 0l160 160C387.1 213.9 387.1 234.1 374.6 246.6z" />
          </svg>
        </button>
      </div>
    </div>
    <div class="container flex flex-wrap justify-between items-center mx-auto">
      <NuxtLink to="/" class="flex items-center">
        <nuxt-img provider="imgix" preload src="/ST.png" class="mr-3 max-h-9 sm:max-h-12" alt="Logo"
          style="border: 1px solid #fff" />
        <div class="">
          <!--
          <p class="self-center text-sm whitespace-nowrap dark:text-white">
            ST
          </p>
          <p class="self-center text-xs whitespace-nowrap dark:text-white">
            ST ENGINEERING 2021
          </p>
          -->
        </div>
      </NuxtLink>

      <div class="flex items-center md:order-2">
        <div v-if="!$nuxt.$store.state.user" class="rounded-full bg-slate-200 h-10 w-10"></div>
        <button v-if="$nuxt.$store.state.user" type="button" style="margin: auto"
          @click="Dop == true ? (Dop = false) : (Dop = true)"
          class="flex mr-3 text-sm rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
          id="user-menu-button" aria-expanded="false" data-dropdown-toggle="dropdown">
          <span class="sr-only">Open user menu</span>
          <nuxt-img :provider="$nuxt.$store.state.user.pictureUrl ? '' : 'imgix'" class="w-10 h-10 rounded-full"
            :src="$nuxt.$store.state.user.pictureUrl != '' ? $nuxt.$store.state.user.pictureUrl : '/user.png'"
            alt=" User" />
        </button>
        <div v-if="$nuxt.$store.state.user" :class="Dop == true ? 'Block' : 'hidden'"
          style="position: fixed; top: 45px; right: 15px; margin-left: 15px"
          class="z-50 my-4 text-base list-none bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600"
          id="dropdown">
          <div class="py-3 px-4">
            <span class="break-all block text-sm text-gray-900 dark:text-white">{{
                $nuxt.$store.state.user.displayName
            }}</span>
          </div>
        </div>
        <!-- Dropdown menu  -->
      </div>
      <div
        class="border-t md:border-none block justify-between items-center w-full md:flex md:w-auto md:order-1 bottom-0 md:top-0 fixed md:static md:h-0 left-0 transition-all"
        id="mobile-menu-2" style="background-color: white'
        ">
        <div class="md:relative mx-auto lg:float-right lg:px-6">
          <ul class="flex flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium text-center">
            <!-- HOME -->
            <li class="w-20 mr-3 flex-1 md:flex-none" style="margin: auto">
              <NuxtLink to="/"
                class="w-full focus:text-teal-500 hover:text-teal-500 justify-center inline-block text-center pt-2 pb-1">
                <svg width="25" height="25" viewBox="0 0 576 512" class="inline-block mb-1">
                  <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                    <path
                      d="M575.8 255.5C575.8 273.5 560.8 287.6 543.8 287.6H511.8L512.5 447.7C512.5 450.5 512.3 453.1 512 455.8V472C512 494.1 494.1 512 472 512H456C454.9 512 453.8 511.1 452.7 511.9C451.3 511.1 449.9 512 448.5 512H392C369.9 512 352 494.1 352 472V384C352 366.3 337.7 352 320 352H256C238.3 352 224 366.3 224 384V472C224 494.1 206.1 512 184 512H128.1C126.6 512 125.1 511.9 123.6 511.8C122.4 511.9 121.2 512 120 512H104C81.91 512 64 494.1 64 472V360C64 359.1 64.03 358.1 64.09 357.2V287.6H32.05C14.02 287.6 0 273.5 0 255.5C0 246.5 3.004 238.5 10.01 231.5L266.4 8.016C273.4 1.002 281.4 0 288.4 0C295.4 0 303.4 2.004 309.5 7.014L564.8 231.5C572.8 238.5 576.9 246.5 575.8 255.5L575.8 255.5z"
                      fill="currentColor"></path>
                  </g>
                </svg>
                <span class="tab tab-home block text-xs">หน้าแรก</span>
              </NuxtLink>
            </li>

            <li class="w-20 mr-3 flex-1 md:flex-none" style="margin: auto">
              <NuxtLink to="/"
                class="w-full focus:text-teal-500 hover:text-teal-500 justify-center inline-block text-center pt-2 pb-1">
                <svg width="25" height="25" viewBox="0 0 448 512" class="inline-block mb-1">
                  <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                    <path
                      d="M224 256c70.7 0 128-57.31 128-128s-57.3-128-128-128C153.3 0 96 57.31 96 128S153.3 256 224 256zM274.7 304H173.3C77.61 304 0 381.6 0 477.3c0 19.14 15.52 34.67 34.66 34.67h378.7C432.5 512 448 496.5 448 477.3C448 381.6 370.4 304 274.7 304z"
                      fill="currentColor"></path>
                  </g>
                </svg>

                <span class="tab tab-home block text-xs">การตั้งค่า</span>
              </NuxtLink>
            </li>
            <!-- HOME -->
            <!-- MHE -->



            <!-- MHE -->
          </ul>
        </div>
      </div>
    </div>
    <!--
        <div
            class="w-full md:w-1/5 bg-gray-900 md:bg-gray-900 px-2 text-center fixed bottom-0 md:pt-8 md:top-0 md:left-0 h-16 md:h-screen md:border-r-4 md:border-gray-600">
            <div class="md:relative mx-auto lg:float-right lg:px-6">
                <ul class="list-reset flex flex-row md:flex-col text-center md:text-left">
                    <li class="mr-3 flex-1">
                        <a href="#"
                            class="block py-1 md:py-3 pl-1 align-middle text-gray-800 no-underline hover:text-pink-500 border-b-2 border-gray-800 md:border-gray-900 hover:border-pink-500">
                            <i class="fas fa-link pr-0 md:pr-3"></i><span
                                class="pb-1 md:pb-0 text-xs md:text-base text-gray-600 md:text-gray-400 block md:inline-block">Link</span>
                        </a>
                    </li>
                    <li class="mr-3 flex-1">
                        <a href="#"
                            class="block py-1 md:py-3 pl-1 align-middle text-gray-800 no-underline hover:text-pink-500 border-b-2 border-gray-800 md:border-gray-900 hover:border-pink-500">
                            <i class="fas fa-link pr-0 md:pr-3"></i><span
                                class="pb-1 md:pb-0 text-xs md:text-base text-gray-600 md:text-gray-400 block md:inline-block">Link</span>
                        </a>
                    </li>
                    <li class="mr-3 flex-1">
                        <a href="#"
                            class="block py-1 md:py-3 pl-1 align-middle text-white no-underline hover:text-white border-b-2 border-pink-600">
                            <i class="fas fa-link pr-0 md:pr-3 text-pink-500"></i><span
                                class="pb-1 md:pb-0 text-xs md:text-base text-white md:font-bold block md:inline-block">Active
                                Link</span>
                        </a>
                    </li>
                    <li class="mr-3 flex-1">
                        <a href="#"
                            class="block py-1 md:py-3 pl-1 align-middle text-gray-800 no-underline hover:text-pink-500 border-b-2 border-gray-800 md:border-gray-900 hover:border-pink-500">
                            <i class="fas fa-link pr-0 md:pr-3"></i><span
                                class="pb-1 md:pb-0 text-xs md:text-base text-gray-600 md:text-gray-400 block md:inline-block">Link</span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
        -->
  </nav>
</template>

<script>

export default {
  name: "Menu2",
  data() {
    return {
      Dop: false,
      scrollPosition: 0,
    };
  },
  methods: {

    async getuser() {
      await this.$axios
        .$post("Auth", {
          data: Cookies.get("TOKEN_ID"),
        })
        .then((res) => {
          if (res.Status == 1) {
            this.$nuxt.$store.commit("TOKEN_ID", res.data);
          } else {
            this.$nuxt.$store.commit("TOKEN_ID", "");
            Cookies.remove("TOKEN_ID");
            this.$router.push("/");
          }
        });
    },
    top() {
      window.scrollTo(0, 0);
    },
    updateScroll() {
      this.scrollPosition = window.scrollY;
    }, async getuser() {
      /* liffId จาก Line */
      await liff.init({ liffId: `1657325116-MR5lQD7n` }).catch(err => { throw err });
      if (liff.isLoggedIn()) {
        let getProfile = await liff.getProfile();
        this.$nuxt.$store.commit("user", getProfile);
      } else {
        liff.login();
      }
    }
  },
  created() {
    if (process.client) {

      this.getuser()

      /*
            this.$bus.$emit('unlock', Cookies.get('TOKEN_ID'))
            console.log(this.$nuxt.$store.state.valueunlock)
            */
    }
  },
  destroyed() {
    this.$socket.client.off("join");
  },
  mounted() {

  },
};
</script>
