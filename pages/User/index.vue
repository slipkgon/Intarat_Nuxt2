<template>
  <div>
    <h5 class="text-center break-all mb-1 text-xl font-medium text-gray-900 animate-fade-in">
     การตั้งค่า
    </h5>
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
