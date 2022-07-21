<template>
  <page-wrapper id="cancelled">
    <txt type="title" is-main>Want to select a different plan?</txt>
    <txt type="large-body" class="mt-4 mb-16">
      Save big and spend less time managing your business and programmes.
    </txt>
    <payment class="mb-24" />
    <benefits class="mb-24" />
    <testimonials />
  </page-wrapper>
</template>

<script>
import PageWrapper from "../components/generic/PageWrapper";
import Payment from "~/components/pages/Payment";
import Benefits from "~/components/pages/Benefits";
import Txt from "~/components/elements/Txt.vue";
import Testimonials from "~/components/generic/Testimonials.vue";

export default {
  components: {
    PageWrapper,
    Txt,
    Payment,
    Benefits,
    Testimonials,
  },
  head() {
    return {
      title: "Cancelled",
      meta: [
        { hid: "og:title", name: "og:title", content: "Cancelled" },
        { hid: "twitter:title", name: "twitter:title", content: "Cancelled" },
        { hid: "robots", name: "robots", content: "noindex" },
        {
          hid: "og:url",
          name: "og:url",
          content: "https://traininblocks.com/cancelled/",
        },
      ],
      link: [
        {
          hid: "canonical",
          rel: "canonical",
          href: "https://traininblocks.com/cancelled/",
        },
      ],
    };
  },
};
</script>
