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
        name: 'PTminder',
        slug: 'ptminder',
        price: '$40–$123 per month',
        price_desc: [
          'For that price, you don\'t get unlimited clients',
          'Complicated pricing plans'
        ]
      }
    }
  },
  beforeCreate () {
    this.$parent.$parent.metaHelper.title = 'PTminder'
    this.$parent.$parent.metaHelper.description = 'Over-delivering doesn\'t have to cost you. Impress your clients and help them reach their health and fitness goals.'
    this.$parent.$parent.metaHelper.url = 'https://traininblocks.com/'
  }
}
</script>
