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
        name: "PTDistinction",
        slug: "ptdistinction",
        price: "$19–$80 per month",
        price_desc: [
          "Limits on the number of clients, e.g. you can only have 3 clients on the cheapest plan",
          "Complicated pricing",
          "Hard to use and little flexibility",
          "Paying at most $80 a month for unlimited access",
          "Creating workouts not free-form and follows a specific structure",
        ],
      },
    };
  },
  head() {
    return {
      title: "PTDistinction",
      meta: [
        {
          hid: "description",
          name: "description",
          content:
            "Train In Blocks vs PTDistinction. See how these Personal Trainer software products stack up against each other with product feature comparisons.",
        },
        { hid: "og:title", name: "og:title", content: "PTDistinction" },
        {
          hid: "og:description",
          name: "og:description",
          content:
            "Train In Blocks vs PTDistinction. See how these Personal Trainer software products stack up against each other with product feature comparisons.",
        },
        {
          hid: "twitter:title",
          name: "twitter:title",
          content: "PTDistinction",
        },
        {
          hid: "twitter:description",
          name: "twitter:description",
          content:
            "Train In Blocks vs PTDistinction. See how these Personal Trainer software products stack up against each other with product feature comparisons.",
        },
      ],
      link: [
        {
          hid: "canonical",
          rel: "canonical",
          href: "https://traininblocks.com/compare/ptdistinction/",
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
              "name": "PTDistinction",
              "item": "https://traininblocks.com/compare/ptdistinction/"
            }]
          }`,
          type: "application/ld+json",
        },
      ],
    };
  },
};
</script>
