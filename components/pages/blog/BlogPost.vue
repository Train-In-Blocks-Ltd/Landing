<template>
  <div class="mb-8 sm:mb-0 sm:flex">
    <img
      height="auto"
      width="auto"
      :src="require(`../../../assets/media-uploads/${post.img}`)"
      :alt="post.alt || post.title"
      class="w-full aspect-square object-cover gray sm:w-64 mb-8 sm:mb-0 sm:mr-8 max-w-4xl"
      loading="lazy"
    />
    <div class="flex flex-col w-full sm:w-2/3 max-w-4xl">
      <nuxt-link :to="`/${postType}/${post.slug}/`">
        <txt type="subtitle" class="hover:opacity-60 transition-all">
          {{ post.title }}
        </txt>
      </nuxt-link>
      <txt class="my-4">
        {{ post.postDesc }}
      </txt>
      <div class="flex justify-between mt-auto">
        <nuxt-link
          class="flex items-center hover:opacity-60 transition-all"
          :to="`/${postType}/${post.slug}/`"
        >
          <txt class="mr-4">Continue reading</txt>
          <inline-svg :src="require('../../../assets/svg/Arrow.svg')" />
        </nuxt-link>
        <span>{{ readingTime(post.text) }} minute read</span>
      </div>
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
    postType: String,
  },
  methods: {
    readingTime(post) {
      const avgWordsPerMin = 200;
      const count = post.match(/\w+/g).length;
      return Math.ceil(count / avgWordsPerMin);
    },
  },
};
</script>
