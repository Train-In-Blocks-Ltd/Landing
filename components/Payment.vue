<style scoped>
.container--pricing {
  display: grid;
  grid-template: 1fr 1fr / 1fr 1fr;
  grid-gap: 2rem;
  margin-top: 4rem
}
.product_container {
  padding: 2rem;
  border: 3px solid var(--base_dark);
  border-radius: 10px
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
  <div id="pricing">
    <h2>
      Pricing
    </h2>
    <div class="container--pricing">
      <div class="product_container">
        <div>
          <h2>
            Free
          </h2>
          <form action="https://app.traininblocks.com">
            <button>
              Try it now
            </button>
          </form>
        </div>
        <div>
          <h3>
            Demo
          </h3>
          <p>
            Sign in to our demo account to see how our services can benefit you. You can find the details on the log-in page.
          </p>
        </div>
      </div>
      <div
        v-for="(product, index) in products"
        :key="`product_${index}`"
        class="product_container"
      >
        <div>
          <h2>
            {{ product.price }}
          </h2>
          <button @click="checkout(product.data)">
            Select
          </button>
        </div>
        <div>
          <h3>
            {{ product.name }}
          </h3>
          <p>
            {{ product.desc }}
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
      products: [
        {
          name: 'Yearly',
          price: '£102',
          timeframe: 'per year',
          desc: 'Save 15% when you sign up to our annual plan — an even better deal.',
          data: [{ price: 'price_1IhbA6BYbiJubfJMIWBucMqr', quantity: 1 }]
        },
        {
          name: 'Monthly',
          price: '£10',
          timeframe: 'per month',
          desc: 'Gets you full access to the app for a amazing price on a recurring payment.',
          data: [{ price: 'price_1GtvcPBYbiJubfJM2voqpLIo', quantity: 1 }]
        },
        {
          name: 'Supporter',
          price: '£15',
          timeframe: 'per month',
          desc: 'Show some love and help us deliver an outstanding service to you. It\'s the same as the monthly plan, but with an added bonus of good karma.',
          data: [{ price: 'price_1IFGHBBYbiJubfJMNHoR9viV', quantity: 1 }]
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
