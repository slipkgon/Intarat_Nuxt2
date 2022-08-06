<template>
  <div>

    <About />
  </div>
</template>

<script>
export default {
  layout: "Menu",
  head() {
    return {
      title: "Intarat | About",
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        {
          hid: "Intarat About",
          name: "Intarat About",
          content: "Intarat About",
        },
      ],
    };
  },

};
</script>
