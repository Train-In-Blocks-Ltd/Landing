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
        price_desc: 'Only 5 clients with the cheaper plan.'
      }
    }
  }
}
</script>
