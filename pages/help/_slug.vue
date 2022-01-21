<template>
  <div class="px:4 sm:px-16">
    <v-back-button link="/help/" />
    <nuxt-content :document="post" />
  </div>
</template>

<script>
import VBackButton from "../../components/generic/VBackButton";

export default {
  components: {
    VBackButton,
  },
  async asyncData({ $content, params }) {
    const post = await $content("help", params.slug).fetch();
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
              "name": "Help",
              "item": "https://traininblocks.com/help/"
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
    this.$parent.$parent.metaHelper.url = `https://traininblocks.com/help/${this.$route.params.slug}/`;
  },
};
</script>
