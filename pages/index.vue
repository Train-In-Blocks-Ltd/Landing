<template>
  <page-wrapper id="home">
    <home-top-section class="mb-32" />
    <showcase class="mb-32" />
    <benefits class="mb-24" />
    <email-intake class="mb-24" />
    <testimonials class="mb-24" />
    <payment class="mb-32" />

    <!-- Comparison section -->
    <txt type="title">See how we compare against...</txt>
    <div class="grid lg:grid-cols-2 gap-x-16 gap-y-4 mt-16 mb-32">
      <div class="sm:flex sm:justify-between text-pine">
        <txt type="subtitle">Train In Blocks</txt>
        <div class="flex items-baseline">
          <txt type="subtitle">£9.99</txt>
          <txt class="ml-2 font-bold">/ month</txt>
        </div>
      </div>
      <nuxt-link
        v-for="(compare, index) in comparisons"
        :key="`compare_${index}`"
        v-infocus="'showElement'"
        :to="`/compare/${compare.slug}/`"
        class="sm:flex sm:justify-between fadeHidden group"
        :style="`--delay: ${0.15 * index}s`"
      >
        <txt
          type="subtitle"
          class="w-fit group-hover:opacity-60 group-focus:opacity-60 transition-opacity"
        >
          {{ compare.name }}
        </txt>
        <div
          class="flex items-baseline group-hover:opacity-6 group-focus:opacity-600 transition-opacity text-graphite"
        >
          <txt type="subtitle">{{ compare.price }}</txt>
          <txt class="ml-2 font-bold">/ month</txt>
        </div>
      </nuxt-link>
    </div>
    <recent-blog-posts :latest-blog-posts="latestBlogPosts" class="mb-32" />
    <social-feed />
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
import Testimonials from "~/components/generic/Testimonials.vue";
import SocialFeed from "~/components/generic/SocialFeed.vue";

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
    Testimonials,
    SocialFeed,
  },
  async asyncData({ $content }) {
    const latestBlogPosts = await $content("blog", { text: true }).fetch();
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
        { name: "TrueCoach", slug: "truecoach", price: "$19-$110" },
        { name: "MyPTHub", slug: "pthub", price: "£49" },
        { name: "PTminder", slug: "ptminder", price: "£28-£99" },
        {
          name: "PTDistinction",
          slug: "ptdistinction",
          price: "$19-$80",
        },
        { name: "Trainerize", slug: "trainerize", price: "$300" },
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
