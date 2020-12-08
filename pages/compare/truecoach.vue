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
        name: 'TrueCoach',
        price: '$19-$99 per month',
        price_desc: 'Only 5 clients with the cheaper plan.'
      }
    }
  }
}
</script>
