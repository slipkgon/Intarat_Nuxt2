<template>
  <div>

    <Contact />
  </div>
</template>

<script>
export default {
  layout: "Menu",
  head() {
    return {
      title: "Intarat | Contact",
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        {
          hid: "Intarat Contact",
          name: "Intarat Contact",
          content: "Intarat Contact",
        },
      ],
    };
  },

};
</script>
