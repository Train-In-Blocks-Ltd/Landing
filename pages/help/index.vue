<template>
  <page-wrapper>
    <div class="grid gap-12 lg:grid-cols-2">
      <div>
        <txt type="title" is-main class="lg:mb-8"
          >Need help with something?</txt
        >
        <txt type="title" class="block lg:hidden mt-4 mb-16">
          <a
            class="underline hover:opacity-60 transition-opacity text-graphite cursor-pointer"
            @click="scroll()"
          >
            Click here</a
          >
          to get in touch or browse our guides
        </txt>
        <div class="grid gap-8">
          <help-post v-for="item in faqItems" :key="item.title" :item="item" />
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
      faqItems: [
        {
          title: "How can I setup my profile?",
          content:
            "From the navigation bar, select 'Portfolio'. Here you can edit information that your clients can access from their home screen.",
        },
        {
          title: "How do I add a new client?",
          content:
            "On the home screen, click on the + icon on the top-right. Fill out the form and submit.",
        },
        {
          title: "How can I create a new template for my sessions?",
          content:
            "From the navigation bar, select 'Templates'. Here you can create preset templates that you can re-use.",
        },
        {
          title: "How do I share workouts with my clients?",
          content:
            "On your client's profile page, if not already done, please press 'Give Access'. Then your clients will receive and email to access their plans and sessions.",
        },
        {
          title: "How does the app track data?",
          content:
            "You surround an exercise protocol or measurement with square brackets. E.g. [Back squat: 3 x 10 at 50/60/70kg] to track 3 sets of increasing load. Find out more by clicking the info icon above the sessions in a client's plan.",
        },
      ],
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
