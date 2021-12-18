<template>
  <div>
    <txt type="title" is-main>Legal</txt>
    <nuxt-link to="/legal/privacy-and-data-policy/">
      <txt>Privacy and Data Policy</txt>
    </nuxt-link>
    <nuxt-link to="/legal/cookies-policy/">
      <txt>Cookies Policy</txt>
    </nuxt-link>
    <nuxt-link to="/legal/terms-of-use/">
      <txt>Terms of Use</txt>
    </nuxt-link>
  </div>
</template>

<script>
import Txt from "../../components/elements/Txt";

export default {
  components: {
    Txt,
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
              "name": "Legal",
              "item": "https://traininblocks.com/legal/"
            }]
          }`,
          type: "application/ld+json",
        },
      ],
    };
  },
  mounted() {
    this.$parent.$parent.metaHelper.title = "Legal";
    this.$parent.$parent.metaHelper.description =
      "Index of legal documents for Train In Blocks";
    this.$parent.$parent.metaHelper.url = "https://traininblocks.com/legal/";
  },
};
</script>
