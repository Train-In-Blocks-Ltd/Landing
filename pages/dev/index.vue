<template>
  <page-wrapper>
    <txt type="title" is-main class="mb-16">Join our development journey</txt>
    <div
      v-if="posts.length > 0"
      class="grid xl:grid-cols-2 gap-8 xl:gap-12 mb-8"
    >
      <blog-post v-for="post in posts" :key="post.title" :post="post" />
    </div>
    <txt v-else type="large-body">No posts yet...</txt>
  </page-wrapper>
</template>

<script>
import Txt from "../../components/elements/Txt";
import PageWrapper from "../../components/generic/PageWrapper";
import BlogPost from "../../components/pages/blog/BlogPost";

export default {
  components: {
    PageWrapper,
    Txt,
    BlogPost,
  },
  async asyncData({ $content }) {
    const posts = await $content("dev", { text: true }).fetch();
    return {
      posts: posts.sort((a, b) => {
        return new Date(b.date) - new Date(a.date);
      }),
    };
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
              "name": "Dev Blog",
              "item": "https://traininblocks.com/dev/"
            }]
          }`,
          type: "application/ld+json",
        },
      ],
    };
  },
  beforeCreate() {
    this.$parent.$parent.metaHelper.title = "Development Log";
    this.$parent.$parent.metaHelper.description =
      "We are extremely active and always developing the most elegant solution for you. Follow our journey here.";
    this.$parent.$parent.metaHelper.url = "https://traininblocks.com/dev/";
  },
};
</script>
