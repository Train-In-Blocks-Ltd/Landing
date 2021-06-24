<template>
  <div>
    <h1>
      See how we compare against...
    </h1>
    <div class="comparison_container">
      <nuxt-link
        v-for="(compare, compareIndex) in comparisons"
        :key="`compare_${compareIndex}`"
        class="compare_link text--large"
        :to="`/compare/${compare.slug}/`"
      >
        {{ compare.name }}
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  mounted () {
    this.$parent.$parent.metaHelper.title = 'Compare'
    this.$parent.$parent.metaHelper.description = 'Index of comparisons for Train In Blocks'
    this.$parent.$parent.metaHelper.url = 'https://traininblocks.com/compare/'
  },
  head () {
    return {
      __dangerouslyDisableSanitizers: ['script'],
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
          type: 'application/ld+json'
        }
      ]
    }
  }
}
</script>
