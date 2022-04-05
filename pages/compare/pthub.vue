<template>
  <compare :details="info" />
</template>

<script>
import Compare from "../../components/pages/compare/Compare";
export default {
  components: {
    Compare,
  },
  data() {
    return {
      info: {
        name: "My PT Hub",
        slug: "pthub",
        price: "£49 per month",
        price_desc: [
          "Can be complex and confusing",
          "Creating workouts not free-form and follows a specific structure",
          "Could be slow and unresponsive",
        ],
      },
    };
  },
  head() {
    return {
      title: "PTHub",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "Train In Blocks vs PTHub. See how these Personal Trainer software products stack up against each other with product feature comparisons.",
        },
        { hid: "og:title", name: "og:title", content: "PTHub" },
        {
          hid: "og:description",
          name: "og:description",
          content: "Train In Blocks vs PTHub. See how these Personal Trainer software products stack up against each other with product feature comparisons.",
        },
        {
          hid: "twitter:title",
          name: "twitter:title",
          content: "PTHub",
        },
        {
          hid: "twitter:description",
          name: "twitter:description",
          content: "Train In Blocks vs PTHub. See how these Personal Trainer software products stack up against each other with product feature comparisons.",
        },
      ],
      link: [{ hid: "canonical", rel: "canonical", href: "https://traininblocks.com/compare/pthub/" }],
      __dangerouslyDisableSanitizers: ["script"],
      script: [
        {
          innerHTML: `{
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [{
              "@type": "ListItem",
              "position": 2,
              "name": "Compare",
              "item": "https://traininblocks.com/compare/"
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
              "name": "PTHub",
              "item": "https://traininblocks.com/compare/pthub/"
            }]
          }`,
          type: "application/ld+json",
        },
      ],
    };
  },
};
</script>
