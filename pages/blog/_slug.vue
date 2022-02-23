<template>
  <article-wrapper>
    <v-back-button link="/blog/" />
    <img
      :src="require(`../../assets/media-uploads/${post.img}`)"
      class="w-full aspect-square object-cover max-w-lg m-auto gray"
      loading="lazy"
    />
    <txt type="title" class="mt-8 mb-4" is-main>
      {{ post.title }}
    </txt>
    <txt type="large-body" grey>Created by {{ post.author }}</txt>
    <txt type="large-body" grey>{{ post.date }}</txt>
    <txt type="large-body" class="mb-16" grey>{{readingTime(post.text)}} minute read</txt>
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
    const post = await $content("blog", {text: true}, params.slug).fetch();
    return { post };
  },
  head() {
    return {
      __dangerouslyDisableSanitizers: ["script"],
      script: [
        {
          innerHTML: `{
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [{
              "@type": "ListItem",
              "position": 2,
              "name": "Blog",
              "item": "https://traininblocks.com/blog/"
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
              "item": "https://traininblocks.com/legal/${this.$route.params.slug}/"
            }]
          }`,
          type: "application/ld+json",
        },
      ],
    };
  },
  mounted() {
    this.$parent.$parent.metaHelper.title = this.post.title;
    this.$parent.$parent.metaHelper.description = this.post.postDesc;
    this.$parent.$parent.metaHelper.image = this.post.img;
    this.$parent.$parent.metaHelper.url = `https://traininblocks.com/blog/${this.$route.params.slug}/`;
  },
  methods: {
    readingTime (post) {
      const avgWordsPerMin = 200;
      const count = post.match(/\w+/g).length;
      return Math.ceil(count / avgWordsPerMin);
    }
  },
};
</script>
