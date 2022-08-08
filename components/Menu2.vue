<template>

  <nav
    class="select-none bg-gray-100 animate-fade-in border-b dark:border-gray-700 border-gray-300 px-2 sm:px-4 py-2.5 dark:bg-gray-900 transition-all text-gray-700   dark:text-gray-300 "
    style="position: fixed;width: 100%;top: 0;/*border-color: rgb(15 23 42/.1);*/">

    <div class="container flex flex-wrap justify-between items-center mx-auto">
      <div class="flex items-center p-4  border-slate-900/10 lg:hidden dark:border-slate-50/[0.06]">
        <button type="button" @click="menuopen"
          class="text-slate-500 hover:text-slate-600 dark:text-slate-400 dark:hover:text-slate-300"><span
            class="sr-only">Navigation</span><svg width="24" height="24">
            <path d="M5 6h14M5 12h14M5 18h14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
            </path>
          </svg></button>
      </div>
      <NuxtLink to="/" class="flex items-center">
        <span class="break-all block text-lg text-gray-900 dark:text-gray-300">Intarat Mekloy</span>
        <div class="">
          <!--
          <p class="self-center text-sm whitespace-nowrap dark:text-gray-300">
            ST
          </p>
          <p class="self-center text-xs whitespace-nowrap dark:text-gray-300">
            ST ENGINEERING 2021
          </p>
          -->
        </div>
      </NuxtLink>

      <div class="flex items-center md:order-2 p-2">
        <button aria-label="theme-toggle" name="theme-toggle" id="theme-toggle" type="button" @click="Themeset"
          class="mr-2 text-gray-700 dark:white p-1 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
          <svg id="theme-toggle-dark-icon" class="w-5 h-5 hidden dark:block text-gray-900 dark:text-gray-300"
            fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" __cpp="1">
            <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" __cpp="1"></path>
          </svg>
          <svg id="theme-toggle-light-icon" class="w-5 h-5 block dark:hidden text-gray-900 dark:text-gray-300"
            fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" __cpp="1">
            <path
              d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
              fill-rule="evenodd" clip-rule="evenodd" __cpp="1"></path>
          </svg>
        </button>





        <!--
        <div v-if="!$nuxt.$store.state.user" class="rounded-full bg-slate-200 h-10 w-10"></div>
         -->
        <button type="button" style="margin: auto" @click="Dop == true ? (Dop = false) : (Dop = true)"
          class="hidden  mr-3 text-sm rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
          id="user-menu-button" aria-expanded="false" data-dropdown-toggle="dropdown">
          <span class="sr-only">Open user menu</span>
          <nuxt-img provider="imgix" class="w-10 h-10 rounded-full m-auto dark:bg-white" src="/Intarat.png"
            alt=" Intarat" />
        </button>
        <div :class="Dop == true ? 'Block' : 'hidden'"
          style="position: fixed; top: 45px; right: 15px; margin-left: 15px"
          class="animate-fade-in z-50 my-4 text-base list-none bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600"
          id="dropdown">
          <div class="py-3 px-4 ">
            <nuxt-img provider="imgix" class="w-14 h-14 rounded-full m-auto" src="/Intarat.png" alt="Intarat" />
            <span class="break-all block text-sm text-gray-900 dark:text-gray-300">Intarat Mekloy</span>
          </div>
        </div>
        <!-- Dropdown menu  -->
      </div>
      <!--
        <div
          class=" dark:border-gray-900 border-gray-200 dark:text-gray-300 border-t md:border-none block justify-between items-center w-full md:flex md:w-auto md:order-1 bottom-0 md:top-0 fixed md:static md:h-0 left-0 transition-all"
          id="mobile-menu-2">
          <div class="md:relative mx-auto lg:float-right lg:px-6">
            <ul class="flex flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium text-center">
            
              <li class="w-20 mr-3 flex-1 md:flex-none" style="margin: auto">
                <NuxtLink to="/"
                  class="w-full focus:text-white hover:text-white justify-center inline-block text-center pt-2 pb-1">
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
                <NuxtLink to="/User"
                  class="w-full focus:text-white hover:text-white justify-center inline-block text-center pt-2 pb-1">
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
              
            </ul>
          </div>
         
      </div>
       -->
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
const Cookies = process.client ? require("js-cookie") : undefined;
export default {
  name: "Menu2",
  /*
  head() {
    return {
      bodyAttrs: {
        class: process.client ? this.$nuxt.$store.state.Theme == 'B' ? 'dark' : '' : undefined
      }
    }
    
},
*/
  data() {
    return {
      Dop: false,
      scrollPosition: 0,
    };
  },
  methods: {
    menuopen() {
      if (this.$nuxt.$store.state.menu == false) {

        this.$nuxt.$store.commit("menu", true);

      } else {
        this.$nuxt.$store.commit("menu", false);
      }
    },
    Themeset() {
      if (this.$nuxt.$store.state.Theme == "W") {
        document.querySelector("body").classList.add("dark");
        Cookies.set("Theme", "B");
        this.$nuxt.$store.commit("Theme", "B");

      } else {
        Cookies.set("Theme", "W");
        this.$nuxt.$store.commit("Theme", "W");
        document.querySelector("body").classList.remove("dark");
      }
    },
    top() {
      window.scrollTo(0, 0);
    },
    updateScroll() {
      this.scrollPosition = window.scrollY;
    }
  },
  created() {
    if (process.client) {

      if (!Cookies.get("Theme")) {
        this.$nuxt.$store.commit("Theme", "W");
      } else {
        if (Cookies.get("Theme") == "B") {
          this.$nuxt.$store.commit("Theme", "B");

        } else {
          this.$nuxt.$store.commit("Theme", "W");

        }
      }


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
