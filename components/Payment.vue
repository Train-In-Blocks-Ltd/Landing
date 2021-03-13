<style scoped>
.container--pricing {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 2rem;
  margin-top: 4rem
}
.product_container {
  padding: 2rem;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 0 20px 10px #28282808
}
.product_container > div:first-child {
  display: flex;
  justify-content: space-between
}
.product_container > div:first-child * {
  margin: auto 0
}

@media (max-width: 992px) {
  .container--pricing {
    grid-template-columns: 1fr
  }
}
</style>

<template>
  <div>
    <h1>
      Try it with our 14-day free trial
    </h1>
    <div class="container--pricing">
      <div class="product_container">
        <div>
          <h1>
            £102
          </h1>
          <button @click="checkout(yearly)">
            Select
          </button>
        </div>
        <div>
          <h2>
            Yearly
          </h2>
          <p>
            Save 15% when you sign up to our annual plan — an even better deal.
          </p>
        </div>
      </div>
      <div class="product_container">
        <div>
          <h1>
            £10
          </h1>
          <button @click="checkout(monthly)">
            Select
          </button>
        </div>
        <div>
          <h2>
            Monthly
          </h2>
          <p>
            Gets you full access to the app for a amazing price on a recurring payment.
          </p>
        </div>
      </div>
      <div class="product_container">
        <div>
          <h1>
            £15
          </h1>
          <button @click="checkout(supporter)">
            Select
          </button>
        </div>
        <div>
          <h2>
            Supporter
          </h2>
          <p>
            Show some love and help us deliver an outstanding service to you. It's the same as the monthly plan, but with an added bonus of good karma.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import { loadStripe } from '@stripe/stripe-js'

export default {
  data () {
    return {
      monthly: [
        {
          price: 'price_1GtvcPBYbiJubfJM2voqpLIo',
          quantity: 1
        }
      ],
      yearly: [
        {
          price: 'price_1GtvcPBYbiJubfJM7nWmNywN',
          quantity: 1
        }
      ],
      supporter: [
        {
          price: 'price_1IFGHBBYbiJubfJMNHoR9viV',
          quantity: 1
        }
      ]
    }
  },
  methods: {
    async checkout (item) {
      const response = await axios.post('/.netlify/functions/checkout', {
        line_items: item
      })
      const stripe = await loadStripe('pk_live_shgxQjmTIkJSJjVJpi8N1RQO00aJHHNIWX')
      stripe.redirectToCheckout({ sessionId: response.data })
    }
  }
}
</script>
