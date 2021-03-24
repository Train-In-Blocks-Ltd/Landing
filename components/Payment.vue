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

/* Checkout */
.checkout {
  display: grid;
  grid-gap: 2rem;
  margin-top: 4rem
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
      {{ !checkingOut ? 'Pricing' : `Checkout` }}
    </h1>
    <div v-if="!checkingOut" class="container--pricing">
      <div
        v-for="(product, index) in products"
        :key="`product_${index}`"
        class="product_container"
      >
        <div>
          <h1>
            {{ product.price }}
          </h1>
          <button @click="checkingOut = true, selectedProduct = product">
            Select
          </button>
        </div>
        <div>
          <h2>
            {{ product.name }}
          </h2>
          <p>
            {{ product.desc }}
          </p>
        </div>
      </div>
    </div>
    <form v-else class="checkout">
      <input
        v-model="checkout_form.email"
        class="small_border_radius width_300"
        type="email"
        placeholder="Email"
        aria-label="Email"
        required
      >
      <input
        v-model="checkout_form.password"
        class="small_border_radius width_300"
        type="password"
        placeholder="Password"
        aria-label="Password"
        required
      >
      <input
        v-model="checkout_form.confirmPassword"
        class="small_border_radius width_300"
        type="password"
        placeholder="Confirm password"
        aria-label="Confirm password"
        required
      >
      <div>
        <button
          :disabled="checkout_form.password !== checkout_form.confirmPassword || checkout_form.password === ''"
          type="submit"
        >
          Submit
        </button>
        <button
          type="button"
          class="cancel"
          @click.prevent="checkingOut = false, selectedProduct = null, checkout_form.email = '', checkout_form.password = '', checkout_form.confirmPassword = ''"
        >
          Cancel
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import axios from 'axios'
import { loadStripe } from '@stripe/stripe-js'

export default {
  data () {
    return {
      checkout_form: {
        email: '',
        password: '',
        confirmPassword: ''
      },
      checkingOut: false,
      selectedProduct: null,
      products: [
        { name: 'Yearly', price: '£102', desc: 'Save 15% when you sign up to our annual plan — an even better deal.' },
        { name: 'Monthly', price: '£10', desc: 'Gets you full access to the app for a amazing price on a recurring payment.' },
        { name: 'Supporter', price: '£15', desc: 'Show some love and help us deliver an outstanding service to you. It\'s the same as the monthly plan, but with an added bonus of good karma.' }
      ],

      // OLD DATA

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
