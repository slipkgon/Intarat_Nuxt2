<template>
  <div>
    <Home />

  </div>
</template>

<script>
export default {
  layout: "Menu",
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

};
</script>
