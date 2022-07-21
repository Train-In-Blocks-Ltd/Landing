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
      title: "Legal",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "Index of legal documents for Train In Blocks",
        },
        { hid: "og:title", name: "og:title", content: "Legal" },
        {
          hid: "og:description",
          name: "og:description",
          content: "Index of legal documents for Train In Blocks",
        },
        {
          hid: "twitter:title",
          name: "twitter:title",
          content: "Legal",
        },
        {
          hid: "twitter:description",
          name: "twitter:description",
          content: "Index of legal documents for Train In Blocks",
        },
        {
          hid: "og:url",
          name: "og:url",
          content: "https://traininblocks.com/legal/",
        },
      ],
      link: [
        {
          hid: "canonical",
          rel: "canonical",
          href: "https://traininblocks.com/legal/",
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
