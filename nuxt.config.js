export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "Intarat",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "Intarat" },
      { name: "format-detection", content: "telephone=no" },
    ],
    script: [
      {
        src: "https://static.line-scdn.net/liff/edge/2.1/liff.js",
      },
    ],
  },
  loading: false,
  target: "static",
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["@/assets/css/tailwind.css"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    {
      src: "~/plugins/test.js",
      mode: "client",
    },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss

    "nuxt-esbuild",
    "@nuxtjs/dotenv",
    "@nuxt/postcss8",
    "nuxt-purgecss",
    "@nuxt/image",
    "@nuxtjs/web-vitals",
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    "@nuxtjs/axios",
    ["@nuxtjs/component-cache", { maxAge: 60 * 60 * 24 * 365 }],
    "@nuxtjs/pwa",
    "@nuxtjs/workbox",
    "nuxt-imagemin",
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    postcss: {
      order: ["tailwindcss", "tailwindcss/nesting", "autoprefixer"],
      plugins: {
        "postcss-nested": false,
        tailwindcss: {},
        autoprefixer: {},
      },
    },
    extractCSS: true,
    extend(config, { isClient }) {
      // Extend only webpack config for client-bundle
      if (isClient) {
        config.devtool = "source-map";
      }
    },
  },
  pwa: {
    workbox: {
      workboxURL: "swscript.js",
    },
    dest: "public",
    meta: {
      title: "Intarat",
      author: "Intarat",
    },
    manifest: {
      name: "Intarat",
      short_name: "Intarat",
      description: "Intarat App",
      lang: "en",
      display: "standalone",
      theme_color: "#FFFFFF",
      background_color: "white",
      orientation: "portrait-primary",
      start_url: "/",
      prefer_related_applications: true,
    },
    icon: {
      fileName: "Intarat.png",
      sizes: [64, 120, 144, 152, 192, 384, 512],
    },
    start_url: "/",
  },
  webVitals: {
    // provider: '', // auto detectd
    debug: false,
    disabled: false,
  },
  generate: {
    cache: {
      ignore: [
        // When something changed in the docs folder, do not re-build via webpack
        "docs",
      ],
    },
    fallback: true,
  },
  render: {
    static: {
      maxAge: 1000 * 60 * 60 * 24 * 7,
    },
    http2: {
      push: true,
      pushAssets: (req, res, publicPath, preloadFiles) =>
        preloadFiles
          .filter((f) => f.asType === "script" && f.file === "runtime.js")
          .map((f) => `<${publicPath}${f.file}>; rel=preload; as=${f.asType}`),
    },
  },
  serverMiddleware: [{ path: "/api", handler: "~/api/index.js" }],
  image: {
    /*dir: "static",*/
    provider: "ipx",
    imgix: {
      baseURL: "/",
    },
  },
  /*
  middleware: ["Auth"],

  
 
 
  */
};
