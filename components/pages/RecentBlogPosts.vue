<template>
  <div>
    <txt type="title" class="mb-16">Recent blog posts</txt>
    <div
      class="grid gap-12 sm:gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-4 mb-16"
    >
      <div
        v-for="(blogPost, blogPostIndex) in latestBlogPosts.slice(-3).reverse()"
        :key="`post_${blogPostIndex}`"
        class="flex flex-col pr-4"
      >
        <img
          height="auto"
          width="auto"
          :src="require(`../../assets/media-uploads/${blogPost.img}`)"
          :alt="blogPost.title"
          class="gray h-64 w-64"
          loading="lazy"
        />
        <nuxt-link :to="`/blog/${blogPost.slug}/`">
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
        <nuxt-link
          :to="`/blog/${blogPost.slug}/`"
          class="flex mt-auto items-center hover:opacity-60 transition-all"
        >
          <txt class="mr-4" bold> Continue reading </txt>
          <inline-svg :src="require('../../assets/svg/Arrow.svg')" />
        </nuxt-link>
      </div>
    </div>
    <nuxt-link to="/blog/">
      <txt type="large-body" class="hover:opacity-60 transition-all" bold>
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
};
</script>
