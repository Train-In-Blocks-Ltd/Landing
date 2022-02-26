<template>
  <page-wrapper>
    <txt type="title" is-main>See how we compare against...</txt>
    <div class="">
      <nuxt-link
        v-for="(compare, compareIndex) in comparisons"
        :key="`compare_${compareIndex}`"
        class="compare_link text--large"
        :to="`/compare/${compare.slug}/`"
      >
        {{ compare.name }}
      </nuxt-link>
    </div>
  </page-wrapper>
</template>

<script>
import Txt from "../../components/elements/Txt";
import PageWrapper from "~/components/generic/PageWrapper.vue";

export default {
  components: {
    Txt,
    PageWrapper,
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
