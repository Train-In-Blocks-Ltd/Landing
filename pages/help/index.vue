<template>
  <page-wrapper>
    <div class="grid gap-12 lg:grid-cols-2">
      <div>
        <!-- General -->
        <txt type="title" class="lg:mb-8">General FAQs</txt>
        <div class="grid gap-8">
          <help-post
            v-for="item in faqItemsGeneral"
            :key="item.title"
            :item="item"
          />
        </div>

        <!-- Trainer -->
        <txt type="title" class="mt-12 mb-8">Trainer FAQs</txt>
        <div class="grid gap-8">
          <help-post
            v-for="item in faqItemsTrainer"
            :key="item.title"
            :item="item"
          />
        </div>

        <!-- Client -->
        <txt type="title" class="mt-12 mb-8">Client FAQs</txt>
        <div class="grid gap-8">
          <help-post
            v-for="item in faqItemsClient"
            :key="item.title"
            :item="item"
          />
        </div>
      </div>
      <div>
        <txt type="title" class="mb-8">Need something more specific?</txt>
        <more-help-form />
      </div>
    </div>
    <team-section class="mt-32" />
  </page-wrapper>
</template>

<script>
import {
  faqItemsTrainer,
  faqItemsClient,
  faqItemsGeneral,
} from "../../content/help/faq";
import PageWrapper from "../../components/generic/PageWrapper";
import Txt from "../../components/elements/Txt";
import HelpPost from "~/components/pages/help/HelpPost";
import MoreHelpForm from "~/components/pages/help/MoreHelpForm";
import TeamSection from "~/components/pages/help/TeamSection.vue";

export default {
  components: {
    PageWrapper,
    Txt,
    HelpPost,
    MoreHelpForm,
    TeamSection,
  },
  data() {
    return {
      faqItemsGeneral,
      faqItemsTrainer,
      faqItemsClient,
    };
  },
  head() {
    return {
      title: "Support Desk",
      meta: [
        {
          hid: "description",
          name: "description",
          content:
            "Need help with something? We are happy to help with anything.",
        },
        { hid: "og:title", name: "og:title", content: "Support Desk" },
        {
          hid: "og:description",
          name: "og:description",
          content:
            "Need help with something? We are happy to help with anything.",
        },
        {
          hid: "twitter:title",
          name: "twitter:title",
          content: "Support Desk",
        },
        {
          hid: "twitter:description",
          name: "twitter:description",
          content:
            "Need help with something? We are happy to help with anything.",
        },
      ],
      link: [
        {
          hid: "canonical",
          rel: "canonical",
          href: "https://traininblocks.com/help/",
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
              "name": "Help",
              "item": "https://traininblocks.com/help/"
            }]
          }`,
          type: "application/ld+json",
        },
      ],
    };
  },
  methods: {
    scroll() {
      document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
    },
  },
};
</script>
