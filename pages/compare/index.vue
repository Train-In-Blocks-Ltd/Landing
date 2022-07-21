<template>
  <page-wrapper>
    <txt type="title" is-main>See how we compare against...</txt>
    <div class="grid sm:grid-cols-2 gap-y-4 mt-16 mb-32">
      <nuxt-link
        v-for="(compare, compareIndex) in comparisons"
        :key="`compare_${compareIndex}`"
        :to="`/compare/${compare.slug}/`"
        class="w-fit"
      >
        <txt type="subtitle" class="w-fit hover:opacity-60 transition-all">
          {{ compare.name }}
        </txt>
      </nuxt-link>
    </div>
  </page-wrapper>
</template>

<script>
import Txt from "~/components/elements/Txt";
import PageWrapper from "~/components/generic/PageWrapper";

export default {
  components: {
    Txt,
    PageWrapper,
  },
  data() {
    return {
      comparisons: [
        { name: "TrueCoach", slug: "truecoach" },
        { name: "MyPTHub", slug: "pthub" },
        { name: "PTminder", slug: "ptminder" },
        { name: "PTDistinction", slug: "ptdistinction" },
        { name: "Trainerize", slug: "trainerize" },
      ],
    };
  },
  head() {
    return {
      title: "Compare",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "Index of comparisons for Train In Blocks",
        },
        { hid: "og:title", name: "og:title", content: "Compare" },
        {
          hid: "og:description",
          name: "og:description",
          content: "Index of comparisons for Train In Blocks",
        },
        {
          hid: "twitter:title",
          name: "twitter:title",
          content: "Compare",
        },
        {
          hid: "twitter:description",
          name: "twitter:description",
          content: "Index of comparisons for Train In Blocks",
        },
        {
          hid: "og:url",
          name: "og:url",
          content: "https://traininblocks.com/compare/",
        },
      ],
      link: [
        {
          hid: "canonical",
          rel: "canonical",
          href: "https://traininblocks.com/compare/",
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
      ],
    };
  },
};
</script>
