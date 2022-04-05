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
        name: "PTminder",
        slug: "ptminder",
        price: "£28-£99 per month",
        price_desc: [
          "Paying £200 for unlimited clients",
          "Complicated pricing plans",
          "Creating workouts not free-form and follows a specific structure",
          "Can be complex and confusing",
        ],
      },
    };
  },
  head() {
    return {
      title: "PTminder",
      meta: [
        {
          hid: "description",
          name: "description",
          content:
            "Train In Blocks vs PTminder. See how these Personal Trainer software products stack up against each other with product feature comparisons.",
        },
        { hid: "og:title", name: "og:title", content: "PTminder" },
        {
          hid: "og:description",
          name: "og:description",
          content:
            "Train In Blocks vs PTminder. See how these Personal Trainer software products stack up against each other with product feature comparisons.",
        },
        {
          hid: "twitter:title",
          name: "twitter:title",
          content: "PTminder",
        },
        {
          hid: "twitter:description",
          name: "twitter:description",
          content:
            "Train In Blocks vs PTminder. See how these Personal Trainer software products stack up against each other with product feature comparisons.",
        },
      ],
      link: [
        {
          hid: "canonical",
          rel: "canonical",
          href: "https://traininblocks.com/compare/ptminder/",
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
              "name": "PTMinder",
              "item": "https://traininblocks.com/compare/ptminder/"
            }]
          }`,
          type: "application/ld+json",
        },
      ],
    };
  },
};
</script>
