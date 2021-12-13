<style scoped>
/* Home Intro */
iframe {
  display: flex;
  margin: auto;
}

/* Latest posts */
.latest_post_container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 2rem;
}
.latest_post {
  display: flex;
  flex-direction: column;
}
.latest_post a {
  text-decoration: none;
  font-weight: bold;
  transition: var(--transition-standard);
}
.latest_post a:hover {
  opacity: 0.6;
}
.latest_post a:active {
  opacity: 0.4;
}
.latest_post > a {
  margin-top: 2rem;
}
.blog_post__link {
  display: grid;
  grid-template-columns: 160px 24px;
  grid-gap: 0.4rem;
  margin-top: auto;
  transition: grid-gap 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
}
.blog_post__link_text {
  color: var(--base_dark);
  margin: auto 0;
}
.blog_post__link:hover {
  grid-gap: 1rem;
}
.see_all_blogs {
  font-weight: bold;
  transition: var(--transition-standard);
}
.see_all_blogs:hover {
  opacity: 0.6;
}

/* Comparisons */
.comparison_container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 2rem;
}
.compare_link {
  font-weight: bold;
  transition: var(--transition-standard);
}
.compare_link:hover {
  opacity: 0.6;
}

/* Responsiveness */
@media (max-width: 992px) {
  .latest_post_container {
    grid-template-columns: repeat(2, 1fr);
  }
  .latest_post:last-child {
    display: none;
  }
  .blog_post__link:hover {
    grid-gap: 0.4rem;
    opacity: 1;
  }
}
@media (max-width: 576px) {
  .latest_post_container {
    grid-template-columns: 1fr;
    grid-gap: 4rem;
  }
  .comparison_container {
    grid-template-columns: 1fr;
  }
}
</style>

<template>
  <div id="home">
    <home-top-section class="mb-32" />
    <showcase class="mb-32" />
    <benefits class="mb-32" />
    <payment class="mb-32" />
    <h2>See how we compare against...</h2>
    <div class="comparison_container">
      <nuxt-link
        v-for="(compare, compareIndex) in comparisons"
        :key="`compare_${compareIndex}`"
        class="compare_link text--large"
        :to="`/compare/${compare.slug}/`"
      >
        {{ compare.name }}
      </nuxt-link>
    </div>
    <div class="spacer--large" />
    <h2>Recent blog posts</h2>
    <div class="latest_post_container">
      <div
        v-for="(blogPost, blogPostIndex) in latestBlogPosts.slice(-3)"
        :key="`post_${blogPostIndex}`"
        class="latest_post"
      >
        <img
          :src="require(`../static/blog-img/${blogPost.img}`)"
          loading="lazy"
          :alt="blogPost.title"
        />
        <nuxt-link class="text--small" :to="`/blog/${blogPost.slug}/`">
          {{ blogPost.title }}
        </nuxt-link>
        <p>
          {{ blogPost.postDesc }}
        </p>
        <div class="blog_post__link">
          <nuxt-link
            class="blog_post__link_text"
            :to="`/blog/${blogPost.slug}/`"
          >
            Continue reading
          </nuxt-link>
          <inline-svg
            class="svg--read-more"
            :src="require('../assets/svg/Arrow.svg')"
          />
        </div>
      </div>
    </div>
    <div class="spacer" />
    <nuxt-link class="see_all_blogs text--small" to="/blog/">
      See all blog posts
    </nuxt-link>
  </div>
</template>

<script>
import Payment from "../components/pages/Payment";
import Benefits from "../components/pages/Benefits";
import Showcase from "../components/pages/Showcase";
import HomeTopSection from '../components/pages/HomeTopSection'

export default {
  components: {
    Payment,
    Benefits,
    Showcase,
    HomeTopSection
  },
  async asyncData({ $content }) {
    const latestBlogPosts = await $content("blog").fetch();
    latestBlogPosts.sort((b, a) => {
      return b.id - a.id;
    });
    return { latestBlogPosts };
  },
  data() {
    return {
      title: "Want to train more clients effectively?",
      comparisons: [
        { name: "TrueCoach", slug: "truecoach" },
        { name: "MyPTHub", slug: "pthub" },
        { name: "PTminder", slug: "ptminder" },
        { name: "PTDistinction", slug: "ptdistinction" },
        { name: "Trainerize", slug: "trainerize" },
      ],
    };
  },
  head() {
    return {
      __dangerouslyDisableSanitizers: ["script"],
      script: [
        {
          innerHTML: `{
            "@context": "https://schema.org/",
            "@type": "Product",
            "name": "Monthly",
            "description": "Gets you full access to the app for a amazing price on a recurring payment.",
            "brand": {
              "@type": "Brand",
              "name": "Train In Blocks"
            },
            "offers": {
              "@type": "Offer",
              "url": "https://traininblocks.com/",
              "priceCurrency": "GBP",
              "price": "10",
              "availability": "https://schema.org/OnlineOnly"
            }
          }`,
          type: "application/ld+json",
        },
        {
          innerHTML: `{
            "@context": "https://schema.org/",
            "@type": "Product",
            "name": "Supporter",
            "description": "Show some love and help us deliver an outstanding service to you. It's the same as the monthly plan, but with an added bonus of good karma.",
            "brand": {
              "@type": "Brand",
              "name": "Train In Blocks"
            },
            "offers": {
              "@type": "Offer",
              "url": "https://traininblocks.com/",
              "priceCurrency": "GBP",
              "price": "15",
              "availability": "https://schema.org/OnlineOnly"
            }
          }`,
          type: "application/ld+json",
        },
        {
          innerHTML: `{
            "@context": "https://schema.org/",
            "@type": "Product",
            "name": "Yearly",
            "description": "Save 15% when you sign up to our annual plan — an even better deal.",
            "brand": {
              "@type": "Brand",
              "name": "Train In Blocks"
            },
            "offers": {
              "@type": "Offer",
              "url": "https://traininblocks.com/",
              "priceCurrency": "GBP",
              "price": "102",
              "availability": "https://schema.org/OnlineOnly"
            }
          }`,
          type: "application/ld+json",
        },
      ],
    };
  },
  beforeCreate() {
    this.$parent.$parent.metaHelper.title =
      "Affordable Personal Training Software";
    this.$parent.$parent.metaHelper.description =
      "Over-delivering doesn't have to cost you. Impress your clients and help them reach their health and fitness goals.";
    this.$parent.$parent.metaHelper.url = "https://traininblocks.com/";
  },
};
</script>
