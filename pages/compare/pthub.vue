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
        name: 'My PT Hub',
        slug: 'pthub',
        price: '£20-£49 per month',
        price_desc: [
          'Only 5 clients with the cheaper plan.'
        ]
      }
    }
  },
  beforeCreate () {
    this.$parent.$parent.metaHelper.title = 'PTHub'
    this.$parent.$parent.metaHelper.description = 'Over-delivering doesn\'t have to cost you. Impress your clients and help them reach their health and fitness goals.'
    this.$parent.$parent.metaHelper.url = 'https://traininblocks.com/compare/pthub/'
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
              "name": "PTHub",
              "item": "https://traininblocks.com/compare/pthub/"
            }]
          }`,
          type: 'application/ld+json'
        }
      ]
    }
  }
}
</script>
