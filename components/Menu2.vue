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

      <div
        class="bg-gray-100 dark:bg-gray-900  dark:border-gray-700 border-gray-300 text-gray-700   dark:text-gray-300  border-t md:border-none block justify-between items-center w-full md:hidden md:w-auto md:order-1 bottom-0 md:top-0 fixed md:static md:h-0 left-0 transition-all overflow-x-auto no-scrollbar md:scrollbar"
        id="mobile-menu-2">
        <div class="md:relative mx-auto lg:float-right lg:px-6">
          <ul class="flex  flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium text-center">
            <!--inline-flex-->
            <li class="w-20 mr-3 flex-1 md:flex-none" style="margin: auto">
              <NuxtLink to="/"
                class="w-full dark:focus:text-white dark:hover:text-white justify-center inline-block text-center pt-2 pb-1">
                <svg width="25" height="25" viewBox="0 0 16 16" class="inline-block mb-1">
                  <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                    <path
                      :d="$route.name == 'index' ? 'M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5z' : 'M8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4.5a.5.5 0 0 0 .5-.5v-4h2v4a.5.5 0 0 0 .5.5H14a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146zM2.5 14V7.707l5.5-5.5 5.5 5.5V14H10v-4a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v4H2.5z'"
                      fill="currentColor"></path>
                  </g>
                </svg>

                <span class="tab tab-home block text-xs">Home</span>
              </NuxtLink>
            </li>

            <li class="w-20 mr-3 flex-1 md:flex-none" style="margin: auto">
              <NuxtLink to="/About"
                class="w-full dark:focus:text-white dark:hover:text-white justify-center inline-block text-center pt-2 pb-1">
                <svg width="25" height="25" viewBox="0 0 16 16" class="inline-block mb-1">
                  <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">

                    <path
                      :d="$route.name == 'About' ? 'M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4.414a1 1 0 0 0-.707.293L.854 15.146A.5.5 0 0 1 0 14.793V2zm5 4a1 1 0 1 0-2 0 1 1 0 0 0 2 0zm4 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0zm3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2z' : 'M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H4.414A2 2 0 0 0 3 11.586l-2 2V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12.793a.5.5 0 0 0 .854.353l2.853-2.853A1 1 0 0 1 4.414 12H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z'"
                      fill="currentColor"></path>
                    <path v-if="$route.name != 'About'"
                      d="M3 3.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zM3 6a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9A.5.5 0 0 1 3 6zm0 2.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5z"
                      fill="currentColor" />
                  </g>
                </svg>


                <span class="tab tab-home block text-xs">About</span>
              </NuxtLink>
            </li>

            <li class="w-20 mr-3 flex-1 md:flex-none" style="margin: auto">
              <NuxtLink to="/Skill"
                class="w-full dark:focus:text-white dark:hover:text-white justify-center inline-block text-center pt-2 pb-1">
                <svg width="25" height="25" viewBox="0 0 16 16" class="inline-block mb-1">
                  <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                    <path
                      :d="$route.name == 'Skill' ? 'M8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783z' : 'M1 2.828c.885-.37 2.154-.769 3.388-.893 1.33-.134 2.458.063 3.112.752v9.746c-.935-.53-2.12-.603-3.213-.493-1.18.12-2.37.461-3.287.811V2.828zm7.5-.141c.654-.689 1.782-.886 3.112-.752 1.234.124 2.503.523 3.388.893v9.923c-.918-.35-2.107-.692-3.287-.81-1.094-.111-2.278-.039-3.213.492V2.687zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783z'"
                      fill="currentColor"></path>
                  </g>
                </svg>

                <span class="tab tab-home block text-xs">Skill</span>
              </NuxtLink>
            </li>
            <li class="w-20 mr-3 flex-1 md:flex-none" style="margin: auto">
              <NuxtLink to="/Contact"
                class="w-full dark:focus:text-white dark:hover:text-white justify-center inline-block text-center pt-2 pb-1">
                <svg width="25" height="25" viewBox="0 0 576 512" class="inline-block mb-1">
                  <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                    <path
                      :d="$route.name == 'Contact' ? 'M512 32H64C28.65 32 0 60.65 0 96v320c0 35.35 28.65 64 64 64h448c35.35 0 64-28.65 64-64V96C576 60.65 547.3 32 512 32zM176 128c35.35 0 64 28.65 64 64s-28.65 64-64 64s-64-28.65-64-64S140.7 128 176 128zM272 384h-192C71.16 384 64 376.8 64 368C64 323.8 99.82 288 144 288h64c44.18 0 80 35.82 80 80C288 376.8 280.8 384 272 384zM496 320h-128C359.2 320 352 312.8 352 304S359.2 288 368 288h128C504.8 288 512 295.2 512 304S504.8 320 496 320zM496 256h-128C359.2 256 352 248.8 352 240S359.2 224 368 224h128C504.8 224 512 231.2 512 240S504.8 256 496 256zM496 192h-128C359.2 192 352 184.8 352 176S359.2 160 368 160h128C504.8 160 512 167.2 512 176S504.8 192 496 192z' : 'M208 256c35.35 0 64-28.65 64-64c0-35.35-28.65-64-64-64s-64 28.65-64 64C144 227.3 172.7 256 208 256zM464 232h-96c-13.25 0-24 10.75-24 24s10.75 24 24 24h96c13.25 0 24-10.75 24-24S477.3 232 464 232zM240 288h-64C131.8 288 96 323.8 96 368C96 376.8 103.2 384 112 384h192c8.836 0 16-7.164 16-16C320 323.8 284.2 288 240 288zM464 152h-96c-13.25 0-24 10.75-24 24s10.75 24 24 24h96c13.25 0 24-10.75 24-24S477.3 152 464 152zM512 32H64C28.65 32 0 60.65 0 96v320c0 35.35 28.65 64 64 64h448c35.35 0 64-28.65 64-64V96C576 60.65 547.3 32 512 32zM528 416c0 8.822-7.178 16-16 16H64c-8.822 0-16-7.178-16-16V96c0-8.822 7.178-16 16-16h448c8.822 0 16 7.178 16 16V416z'"
                      fill="currentColor"></path>
                  </g>

                </svg>

                <span class="tab tab-home block text-xs">Contact</span>
              </NuxtLink>
            </li>




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
