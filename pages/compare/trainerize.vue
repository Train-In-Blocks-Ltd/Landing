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
        name: 'Trainerize',
        slug: 'trainerize',
        price: '$300 per month',
        price_desc: [
          'Crazy price for unlimited clients',
          'Complicated pricing'
        ]
      }
    }
  },
  beforeCreate () {
    this.$parent.$parent.metaHelper.title = 'Trainerize'
    this.$parent.$parent.metaHelper.description = 'Over-delivering doesn\'t have to cost you. Impress your clients and help them reach their health and fitness goals.'
    this.$parent.$parent.metaHelper.url = 'https://traininblocks.com/'
  }
}
</script>
