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
      title: "TrueCoach",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "Train In Blocks vs TrueCoach. See how these Personal Trainer software products stack up against each other with product feature comparisons.",
        },
        { hid: "og:title", name: "og:title", content: "TrueCoach" },
        {
          hid: "og:description",
          name: "og:description",
          content: "Train In Blocks vs TrueCoach. See how these Personal Trainer software products stack up against each other with product feature comparisons.",
        },
        {
          hid: "twitter:title",
          name: "twitter:title",
          content: "TrueCoach",
        },
        {
          hid: "twitter:description",
          name: "twitter:description",
          content: "Train In Blocks vs TrueCoach. See how these Personal Trainer software products stack up against each other with product feature comparisons.",
        },
      ],
      link: [{ hid: "canonical", rel: "canonical", href: "https://traininblocks.com/compare/truecoach/" }],
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
