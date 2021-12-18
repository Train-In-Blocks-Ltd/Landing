<template>
  <div class="mb-8 md:mb-0 md:flex">
    <img
      :src="require(`../../../assets/blog-img/${post.img}`)"
      class="w-full mb-6 md:mb-0 md:w-1/3 md:mr-8 max-w-4xl"
    />
    <div class="w-full md:w-2/3 max-w-4xl">
      <nuxt-link :to="`/blog/${post.slug}/`">
        <txt type="subtitle" class="hover:opacity-60 transition-all">
          {{ post.title }}
        </txt>
      </nuxt-link>
      <txt class="my-4">
        {{ post.postDesc }}
      </txt>
      <nuxt-link
        class="flex items-center hover:opacity-60 transition-all"
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
    post: {
      type: {
        title: String,
        img: String,
        postDesc: String,
        slug: String,
      },
      default: {},
    },
  },
};
</script>
