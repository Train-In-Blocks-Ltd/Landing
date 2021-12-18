<template>
  <div>
    <txt type="title" is-main class="mb-16">Find power in knowledge</txt>
    <div class="grid gap-8 mb-8">
      <blog-post v-for="post in posts" :key="post.title" :post="post" />
    </div>
  </div>
</template>

<script>
import Txt from "../../components/elements/Txt";
import BlogPost from "../../components/pages/blog/BlogPost";

export default {
  components: {
    Txt,
    BlogPost,
  },
  async asyncData({ $content }) {
    const posts = await $content("blog").fetch();
    posts.sort((b, a) => {
      return a.id - b.id;
    });
    return { posts };
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
