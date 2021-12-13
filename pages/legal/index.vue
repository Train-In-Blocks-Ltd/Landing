<style scoped>
a {
  display: block;
}
</style>

<template>
  <div>
    <h1>Legal</h1>
    <nuxt-link class="input--option" to="/legal/privacy-and-data-policy/">
      Privacy and Data Policy
    </nuxt-link>
    <nuxt-link class="input--option" to="/legal/cookies-policy/">
      Cookies Policy
    </nuxt-link>
    <nuxt-link class="input--option" to="/legal/terms-of-use/">
      Terms of Use
    </nuxt-link>
  </div>
</template>

<script>
export default {
  mounted() {
    this.$parent.$parent.metaHelper.title = "Legal";
    this.$parent.$parent.metaHelper.description =
      "Index of legal documents for Train In Blocks";
    this.$parent.$parent.metaHelper.url = "https://traininblocks.com/legal/";
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
};
</script>
