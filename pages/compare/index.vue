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
  mounted() {
    this.$parent.$parent.metaHelper.title = "Compare";
    this.$parent.$parent.metaHelper.description =
      "Index of comparisons for Train In Blocks";
    this.$parent.$parent.metaHelper.url = "https://traininblocks.com/compare/";
  },
};
</script>
