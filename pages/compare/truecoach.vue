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
        name: "TrueCoach",
        slug: "truecoach",
        price: "$19-$110 per month",
        price_desc: [
          "Only 5 clients with the cheaper plan.",
          "Paying at most $110 a month for unlimited access",
          "Can be complex and confusing",
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
              "name": "TrueCoach",
              "item": "https://traininblocks.com/compare/truecoach/"
            }]
          }`,
          type: "application/ld+json",
        },
      ],
    };
  },
  beforeCreate() {
    this.$parent.$parent.metaHelper.title = "TrueCoach";
    this.$parent.$parent.metaHelper.description =
      "Train In Blocks vs TrueCoach. See how these Personal Trainer software products stack up against each other with product feature comparisons.";
    this.$parent.$parent.metaHelper.url =
      "https://traininblocks.com/compare/truecoach/";
  },
};
</script>
