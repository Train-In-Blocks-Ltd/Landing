<template>
  <compare :details="info" />
</template>

<script>
import Compare from "../../components/Compare";
export default {
  components: {
    Compare,
  },
  data() {
    return {
      info: {
        name: "TrueCoach",
        slug: "truecoach",
        price: "$19-$99 per month",
        price_desc: ["Only 5 clients with the cheaper plan."],
      },
    };
  },
  beforeCreate() {
    this.$parent.$parent.metaHelper.title = "TrueCoach";
    this.$parent.$parent.metaHelper.description =
      "Over-delivering doesn't have to cost you. Impress your clients and help them reach their health and fitness goals.";
    this.$parent.$parent.metaHelper.url =
      "https://traininblocks.com/compare/truecoach/";
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
};
</script>
