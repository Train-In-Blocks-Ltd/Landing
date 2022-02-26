<template>
  <page-wrapper id="home">
    <home-top-section class="mb-32" />
    <showcase class="mb-32" />
    <benefits class="mb-24" />
    <email-intake class="mb-24" />
    <payment class="mb-32" />

    <!-- Comparison section -->
    <txt type="title">See how we compare against...</txt>
    <div class="grid sm:grid-cols-2 gap-y-4 mt-16 mb-32">
      <nuxt-link
        v-for="(compare, compareIndex) in comparisons"
        :key="`compare_${compareIndex}`"
        :to="`/compare/${compare.slug}/`"
        class="w-fit"
      >
        <txt type="subtitle" class="w-fit hover:opacity-60 transition-all">
          {{ compare.name }}
        </txt>
      </nuxt-link>
    </div>
    <recent-blog-posts :latest-blog-posts="latestBlogPosts" />
  </page-wrapper>
</template>

<script>
import PageWrapper from "../components/generic/PageWrapper";
import Txt from "../components/elements/Txt";
import Payment from "../components/pages/Payment";
import Benefits from "../components/pages/Benefits";
import Showcase from "../components/pages/Showcase";
import HomeTopSection from "../components/pages/HomeTopSection";
import RecentBlogPosts from "../components/pages/RecentBlogPosts";
import EmailIntake from "../components/generic/EmailIntake";

export default {
  components: {
    PageWrapper,
    Txt,
    Payment,
    Benefits,
    Showcase,
    HomeTopSection,
    RecentBlogPosts,
    EmailIntake,
  },
  async asyncData({ $content }) {
    const latestBlogPosts = await $content("blog").fetch();
    return {
      latestBlogPosts: latestBlogPosts.sort((b, a) => {
        return new Date(b.date) - new Date(a.date);
      }),
    };
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
        { src: "https://identity.netlify.com/v1/netlify-identity-widget.js" },
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
  mounted() {
    if (window.netlifyIdentity) {
      window.netlifyIdentity.on("init", (user) => {
        if (!user) {
          window.netlifyIdentity.on("login", () => {
            document.location.href = "/admin/";
          });
        }
      });
    }
  },
};
</script>
