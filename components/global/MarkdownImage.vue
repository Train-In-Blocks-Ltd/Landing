<template>
  <img :src="imgSrc()" :alt="alt" />
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
    imgSrc() {
      try {
        if (this.src.includes(".gif")) {
          return require(`~/assets/media-uploads/${this.src}`);
        } else {
          return require(`~/assets/media-uploads/${this.src}?resize&size=600&format=webp`);
        }
      } catch (error) {
        return null;
      }
    },
  },
};
</script>
