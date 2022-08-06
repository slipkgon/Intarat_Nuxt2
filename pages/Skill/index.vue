<template>
  <div>

    <Skill />
  </div>
</template>

<script>
export default {
  layout: "Menu",
  head() {
    return {
      title: "Intarat | Skill",
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        {
          hid: "Intarat Skill",
          name: "Intarat Skill",
          content: "Intarat Skill",
        },
      ],
    };
  },

};
</script>
