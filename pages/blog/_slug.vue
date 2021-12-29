<template>
  <div class="px:4 sm:px-16">
    <v-back-button link="/blog/" />
    <img
      :src="require(`../../assets/blog-img/${post.img}`)"
      class="w-full max-w-lg m-auto"
    />
    <txt type="title" class="mt-8 mb-4" is-main>
      {{ post.title }}
    </txt>
    <txt type="large-body" class="mb-16" grey>Created by {{ post.author }}</txt>
    <nuxt-content :document="post" />
    <blog-footer class="mt-16" />
  </div>
</template>

<script>
import Txt from "../../components/elements/Txt";
import BlogFooter from "../../components/pages/blog/BlogFooter";
import VBackButton from "~/components/generic/VBackButton.vue";

export default {
  components: {
    Txt,
    BlogFooter,
    VBackButton,
  },
  async asyncData({ $content, params }) {
    const post = await $content("blog", params.slug).fetch();
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
};
</script>
