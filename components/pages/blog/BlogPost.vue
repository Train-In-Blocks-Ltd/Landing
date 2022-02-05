<template>
  <div class="mb-8 sm:mb-0 sm:flex">
    <img
      height="auto"
      width="auto"
      :src="require(`../../../assets/media-uploads/${post.img}`)"
      class="w-full h-auto sm:w-64 sm:h-64 mb-8 sm:mb-0 sm:mr-8 max-w-4xl"
    />
    <div class="flex flex-col w-full sm:w-2/3 max-w-4xl">
      <nuxt-link :to="`/blog/${post.slug}/`">
        <txt type="subtitle" class="hover:opacity-60 transition-all">
          {{ post.title }}
        </txt>
      </nuxt-link>
      <txt class="my-4">
        {{ post.postDesc }}
      </txt>
      <nuxt-link
        class="flex mt-auto items-center hover:opacity-60 transition-all"
        :to="`/blog/${post.slug}/`"
      >
        <txt class="mr-4">Continue reading</txt>
        <inline-svg :src="require('../../../assets/svg/Arrow.svg')" />
      </nuxt-link>
    </div>
  </div>
</template>

<script>
import Txt from "../../elements/Txt";

export default {
  components: {
    Txt,
  },
  props: {
    post: Object,
  },
};
</script>
