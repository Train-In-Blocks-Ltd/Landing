<template>
  <div>
    <txt type="title" class="mb-16">Recent blog posts</txt>
    <div
      class="grid gap-12 sm:gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-4 mb-16"
    >
      <div
        v-for="(blogPost, index) in latestBlogPosts.slice(-4).reverse()"
        :key="`post_${index}`"
        v-infocus="'showElement'"
        class="flex flex-col pr-4 fadeHidden"
        :style="`--delay: ${0.25 * index}s`"
      >
        <nuxt-link :to="`/blog/${blogPost.slug}/`" tabindex="-1">
          <img
            height="auto"
            width="auto"
            :src="
              require(`../../assets/media-uploads/${blogPost.img}?resize&size=600&format=webp`)
            "
            :alt="blogPost.alt || blogPost.title"
            class="gray aspect-square object-cover"
            loading="lazy"
          />
          <txt
            type="large-body"
            class="my-6 hover:opacity-60 transition-all"
            bold
          >
            {{ blogPost.title }}
          </txt>
        </nuxt-link>
        <txt class="mb-4">
          {{ blogPost.postDesc }}
        </txt>
        <div class="flex justify-between mt-auto">
          <nuxt-link
            :to="`/blog/${blogPost.slug}/`"
            class="flex mt-auto items-center hover:opacity-60 focus:opacity-60 transition-all"
          >
            <txt class="mr-4" bold> Continue reading </txt>
            <span
              class="rounded-none"
              v-html="require('../../assets/svg/Arrow.svg?include')"
            />
          </nuxt-link>
          <span>{{ readingTime(blogPost.text) }} minute read</span>
        </div>
      </div>
    </div>
    <nuxt-link to="/blog/" class="hover:opacity-60 focus:opacity-60 transition-all w-fit">
      <txt type="large-body" bold class="w-fit">
        See all blog posts
      </txt>
    </nuxt-link>
  </div>
</template>

<script>
import Txt from "../elements/Txt";

export default {
  components: {
    Txt,
  },
  props: {
    latestBlogPosts: {
      type: Array,
      default: Array,
    },
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
