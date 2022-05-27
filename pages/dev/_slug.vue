<template>
  <article-wrapper>
    <v-back-button link="/dev/" />
    <txt type="title" class="mt-8 mb-4" is-main>
      {{ post.title }}
    </txt>
    <txt type="large-body" grey>Created by {{ post.author }}</txt>
    <txt type="large-body" class="mb-4" grey>{{ shortDate(post.date) }}</txt>
    <txt type="large-body" class="mb-16" grey
      >{{ readingTime(post.text) }} minute read</txt
    >
    <nuxt-content :document="post" />
    <blog-footer class="mt-16" />
  </article-wrapper>
</template>

<script>
import Txt from "../../components/elements/Txt";
import BlogFooter from "../../components/pages/blog/BlogFooter";
import VBackButton from "~/components/generic/VBackButton";
import ArticleWrapper from "~/components/generic/ArticleWrapper";

export default {
  components: {
    Txt,
    BlogFooter,
    VBackButton,
    ArticleWrapper,
  },
  async asyncData({ $content, params }) {
    const post = await $content("dev", { text: true }, params.slug).fetch();
    return { post };
  },
  head() {
    return {
      title: this.post.title,
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.post.postDesc,
        },
        { hid: "og:title", name: "og:title", content: this.post.title },
        {
          hid: "og:description",
          name: "og:description",
          content: this.post.postDesc,
        },
        {
          hid: "og:image",
          name: "og:image",
          content: this.post.img ? require(`../../assets/media-uploads/${this.post.img}?resize&size=600&format=webp`) : 'https://traininblocks.com/android-chrome-512x512.png?v=192',
        },
        {
          hid: "twitter:title",
          name: "twitter:title",
          content: this.post.title,
        },
        {
          hid: "twitter:description",
          name: "twitter:description",
          content: this.post.postDesc,
        },
        {
          hid: "twitter:img",
          name: "twitter:img",
          content: this.post.img ? require(`../../assets/media-uploads/${this.post.img}?resize&size=600&format=webp`) : 'https://traininblocks.com/android-chrome-512x512.png?v=192',
        },
      ],
      link: [
        {
          hid: "canonical",
          rel: "canonical",
          href: `https://traininblocks.com/dev/${this.$route.params.slug}/`,
        },
      ],
      __dangerouslyDisableSanitizers: ["script"],
      script: [
        {
          innerHTML: `{
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [{
              "@type": "ListItem",
              "position": 2,
              "name": "Dev Blog",
              "item": "https://traininblocks.com/dev/"
            }]
          }`,
          type: "application/ld+json",
        },
        {
          innerHTML: `{
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [{
              "@type": "ListItem",
              "position": 3,
              "name": "${this.post.title}",
              "item": "https://traininblocks.com/dev/${this.$route.params.slug}/"
            }]
          }`,
          type: "application/ld+json",
        },
      ],
    };
  },
  methods: {
    shortDate(date) {
      const d = new Date(date);
      return `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`;
    },
    readingTime(post) {
      const avgWordsPerMin = 200;
      const count = post.match(/\w+/g).length;
      return Math.ceil(count / avgWordsPerMin);
    },
  },
};
</script>
