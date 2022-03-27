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
        name: "Trainerize",
        slug: "trainerize",
        price: "$300 per month",
        price_desc: [
          "Crazy price for unlimited clients",
          "Complicated pricing",
          "Paying upwards of $350 a month for unlimited clients",
          "Can be complex and confusing",
          "Creating workouts not free-form and follows a specific structure",
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
              "name": "Trainerize",
              "item": "https://traininblocks.com/compare/trainerize/"
            }]
          }`,
          type: "application/ld+json",
        },
      ],
    };
  },
  beforeCreate() {
    this.$parent.$parent.metaHelper.title = "Trainerize";
    this.$parent.$parent.metaHelper.description =
      "Train In Blocks vs Trainerize. See how these Personal Trainer software products stack up against each other with product feature comparisons.";
    this.$parent.$parent.metaHelper.url =
      "https://traininblocks.com/compare/trainerize/";
  },
};
</script>
