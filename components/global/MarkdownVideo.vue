<template>
  <video :src="videoSrc()" :alt="alt" controls />
</template>

<script>
export default {
  props: {
    src: {
      type: String,
      required: true,
    },
    alt: {
      type: String,
      required: true,
    },
  },
  methods: {
    videoSrc() {
      try {
        return require(`~/assets/media-uploads/${this.src}`);
      } catch (error) {
        return null;
      }
    },
  },
};
</script>
