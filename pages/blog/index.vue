<template>
  <page-wrapper>
    <txt type="title" is-main class="mb-16">Find power in knowledge</txt>
    <div class="grid xl:grid-cols-2 gap-8 xl:gap-12 mb-8">
      <blog-post v-for="post in posts" :key="post.title" :post="post" />
    </div>
  </page-wrapper>
</template>

<script>
import PageWrapper from "../../components/generic/PageWrapper";
import Txt from "../../components/elements/Txt";
import BlogPost from "../../components/pages/blog/BlogPost";

export default {
  components: {
    PageWrapper,
    Txt,
    BlogPost,
  },
  async asyncData({ $content }) {
    const posts = await $content("blog").fetch();
    return {
      posts: posts.map((post, index) => {
        return { ...post, id: index };
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
              "name": "Blog",
              "item": "https://traininblocks.com/blog/"
            }]
          }`,
          type: "application/ld+json",
        },
      ],
    };
  },
  beforeCreate() {
    this.$parent.$parent.metaHelper.title =
      "Free Content for Personal Trainers";
    this.$parent.$parent.metaHelper.description =
      "Use our high-quality content to improve your knowledge in all-things health, fitness and wellbeing related.";
    this.$parent.$parent.metaHelper.url = "https://traininblocks.com/blog/";
  },
  mounted() {
    const OBSERVER = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          entry.target.setAttribute(
            "class",
            entry.isIntersecting ? "blog_post focused_post" : "blog_post"
          );
        });
      },
      { threshold: 1 }
    );
    document.querySelectorAll(".blog_post").forEach((svgItem) => {
      OBSERVER.observe(svgItem);
    });
  },
};
</script>
