<template>
  <page-wrapper>
    <txt type="title" is-main>Need help with something?</txt>
    <txt type="title" class="mt-4 mb-16">
      <u
        class="hover:opacity-60 transition-opacity text-gray-200"
        @click="scroll()"
      >
        Click here</u
      >
      to get in touch or browse our guides
    </txt>
    <div class="grid gap-8 mb-16">
      <help-post v-for="post in posts" :key="post.title" :post="post" />
    </div>
    <txt type="title" class="mb-8">Need something more specific?</txt>
    <more-help-form />
  </page-wrapper>
</template>

<script>
import PageWrapper from "../../components/generic/PageWrapper";
import Txt from "../../components/elements/Txt";
import HelpPost from "~/components/pages/help/HelpPost";
import MoreHelpForm from "~/components/pages/help/MoreHelpForm";

export default {
  components: {
    PageWrapper,
    Txt,
    HelpPost,
    MoreHelpForm,
  },
  async asyncData({ $content }) {
    const posts = await $content("help").fetch();
    posts.sort((b, a) => {
      return b.id - a.id;
    });
    return { posts };
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
              "name": "Help",
              "item": "https://traininblocks.com/help/"
            }]
          }`,
          type: "application/ld+json",
        },
      ],
    };
  },
  beforeCreate() {
    this.$parent.$parent.metaHelper.title = "Support Desk";
    this.$parent.$parent.metaHelper.description =
      "Need help with something? We are happy to help with anything.";
    this.$parent.$parent.metaHelper.url = "https://traininblocks.com/help/";
  },
  methods: {
    scroll() {
      document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
    },
  },
};
</script>
