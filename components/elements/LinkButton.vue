<template>
  <div
    class="px-6 py-3 bg-gray-800 rounded hover:opacity-60 transition-all w-fit"
  >
    <a :href="link" :target="newTab && '_blank'" class="font-bold text-white"
      ><slot
    /></a>
  </div>
</template>

<script>
export default {
  props: {
    link: {
      type: String,
      default: "",
    },
    newTab: Boolean,
  },
};
</script>
