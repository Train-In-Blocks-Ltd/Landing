<template>
  <div class="mb-8 sm:mb-0 sm:flex">
    <nuxt-link :to="`/${postType}/${post.slug}/`" tabindex="-1">
      <img
        v-if="post.img"
        height="auto"
        width="auto"
        :src="
          require(`../../../assets/media-uploads/${post.img}?resize&size=300&format=webp`)
        "
        :alt="post.alt || post.title"
        class="w-full aspect-square object-cover sm:w-64 max-w-4xl"
        loading="lazy"
      />
    </nuxt-link>

    <div
      class="flex flex-col w-full"
      :class="{ 'sm:w-2/3 max-w-4xl mt-8 sm:mt-0 sm:ml-8 ': post.img }"
    >
      <nuxt-link :to="`/${postType}/${post.slug}/`" tabindex="-1">
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
          <span
            class="rounded-none"
            v-html="require('../../../assets/svg/Arrow.svg?include')"
          />
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
