<template>

  <Tutorial />

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

    }
  },
  methods: {

  },
  mounted() {
    if (process.client && window) {
      window.history.scrollRestoration = 'auto';
    }
  },
  created() {
    if (process.client) {


    }
  },
};
</script>
