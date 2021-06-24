<template>
  <compare :details="info" />
</template>

<script>
import Compare from '../../components/Compare'
export default {
  components: {
    Compare
  },
  data () {
    return {
      info: {
        name: 'PTDistinction',
        slug: 'ptdistinction',
        price: '$19–$80 per month',
        price_desc: [
          'Limits on the number of clients, e.g. you can only have 3 clients on the cheapest plan',
          'Complicated pricing',
          'Hard to use and little flexibility'
        ]
      }
    }
  },
  beforeCreate () {
    this.$parent.$parent.metaHelper.title = 'PTDistinction'
    this.$parent.$parent.metaHelper.description = 'Over-delivering doesn\'t have to cost you. Impress your clients and help them reach their health and fitness goals.'
    this.$parent.$parent.metaHelper.url = 'https://traininblocks.com/compare/ptdistinction/'
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
        },
        {
          innerHTML: `{
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [{
              "@type": "ListItem",
              "position": 3,
              "name": "PTDistinction",
              "item": "https://traininblocks.com/compare/ptdistinction/"
            }]
          }`,
          type: 'application/ld+json'
        }
      ]
    }
  }
}
</script>
