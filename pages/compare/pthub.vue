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
  beforeCreate() {
    this.$parent.$parent.metaHelper.title = "PTHub";
    this.$parent.$parent.metaHelper.description =
      "Train In Blocks vs PTHub. See how these Personal Trainer software products stack up against each other with product feature comparisons.";
    this.$parent.$parent.metaHelper.url =
      "https://traininblocks.com/compare/pthub/";
  },
};
</script>
