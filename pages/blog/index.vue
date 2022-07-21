<template>
  <page-wrapper>
    <txt type="title" is-main class="mb-16">Find power in knowledge</txt>
    <div class="grid xl:grid-cols-2 gap-8 xl:gap-12 mb-8">
      <blog-post
        v-for="(post, index) in posts"
        :key="post.title"
        v-infocus="'showElement'"
        :post="post"
        post-type="blog"
        :class="{ fadeHidden: index > 5 }"
        style="--delay: 0.15s"
      />
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
    const posts = await $content("blog", { text: true }).fetch();
    return {
      posts: posts.sort((a, b) => {
        return new Date(b.date) - new Date(a.date);
      }),
    };
  },
  head() {
    return {
      title: "Free Content for Personal Trainers",
      meta: [
        {
          hid: "description",
          name: "description",
          content:
            "Use our high-quality content to improve your knowledge in all things health, fitness and well-being related.",
        },
        {
          hid: "og:title",
          name: "og:title",
          content: "Free Content for Personal Trainers",
        },
        {
          hid: "og:description",
          name: "og:description",
          content:
            "Use our high-quality content to improve your knowledge in all-things health, fitness and wellbeing related.",
        },
        {
          hid: "twitter:title",
          name: "twitter:title",
          content: "Free Content for Personal Trainers",
        },
        {
          hid: "twitter:description",
          name: "twitter:description",
          content:
            "Use our high-quality content to improve your knowledge in all-things health, fitness and wellbeing related.",
        },
        {
          hid: "og:url",
          name: "og:url",
          content: "https://traininblocks.com/blog/",
        },
      ],
      link: [
        {
          hid: "canonical",
          rel: "canonical",
          href: "https://traininblocks.com/blog/",
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
              "name": "Blog",
              "item": "https://traininblocks.com/blog/"
            }]
          }`,
          type: "application/ld+json",
        },
      ],
    };
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
