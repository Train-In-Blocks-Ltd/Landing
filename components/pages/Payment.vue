<template>
  <div id="pricing">
    <txt type="title" class="mb-16 pt-8">Pricing</txt>
    <div class="grid lg:grid-cols-4 gap-8">
      <card-wrapper
        v-infocus="'showElement'"
        class="p-4 col-span-full lg:col-span-2 fadeHidden"
        no-shadow
        no-hover
      >
        <txt type="title"> 14 Day Free Trial </txt>
        <ul class="mt-4">
          <li>
            Sign up for either our yearly or monthly plan and benefit from a 14
            day free trial.
          </li>
          <li>
            Cancel at any time by logging in to your account and managing your
            subscription.
          </li>
          <li>
            After 14 days you will be automatically billed for your
            subscription.
          </li>
        </ul>
      </card-wrapper>
      <card-wrapper
        v-for="(product, index) in products"
        :id="product.name.toLowerCase()"
        :key="`product_${index}`"
        v-infocus="'showElement'"
        class="p-4 col-span-full lg:col-span-2 lg:row-start-2 fadeHidden"
        no-shadow
        no-hover
        :style="`--delay: ${0.25 * index}s`"
      >
        <div class="flex justify-between">
          <txt type="title">
            {{ product.price }}
          </txt>
          <default-button
            :on-click="() => checkout(product.stripe, product.price)"
            >Select</default-button
          >
        </div>
        <txt type="large-body" class="my-2" bold>
          {{ product.name }}
        </txt>
        <ul>
          <li
            v-for="(point, pointIndex) in product.points"
            :key="`point_${pointIndex}`"
          >
            {{ point }}
          </li>
        </ul>
      </card-wrapper>
    </div>
  </div>
</template>

<script>
// import axios from "axios";
import Txt from "../elements/Txt";
import DefaultButton from "../elements/DefaultButton";
import CardWrapper from "../generic/CardWrapper";

export default {
  components: {
    Txt,
    DefaultButton,
    CardWrapper,
  },
  data() {
    return {
      products: [
        {
          name: "Yearly",
          price: "£99.99",
          timeframe: "per year",
          points: [
            "Save 15% when you sign up on this plan",
            "Unlimited clients",
            "Unlimited plans",
            "Unlimited sessions",
            "Create session templates",
            "Client-access",
            "Session bookings",
          ],
          stripe: { price: "price_1KuExhBYbiJubfJMQ6fAWCq8", quantity: 1 },
        },
        {
          name: "Monthly",
          price: "£9.99",
          timeframe: "per month",
          points: [
            "Unlimited clients",
            "Unlimited plans",
            "Unlimited sessions",
            "Create session templates",
            "Client-access",
            "Session bookings",
          ],
          stripe: { price: "price_1KuEwgBYbiJubfJMbeYkuXP6", quantity: 1 },
        },
      ],
    };
  },
  methods: {
    checkout(item, price) {
      // const response = await axios.post("/.netlify/functions/checkout", {
      //   line_items: [item],
      //   price: parseInt(price.replace("£", "")),
      // });
      if (this.$cookies.isEnabled("Google Analytics")) {
        this.gtag_report_conversion({
          value: parseInt(price.replace("£", "")),
        });
      }
      if (this.$cookies.isEnabled("Microsoft Universal Event Tracking")) {
        this.uet_report_conversion({
          value: parseInt(price.replace("£", "")),
        });
      }
      if (this.$cookies.isEnabled("Facebook Pixel")) {
        // eslint-disable-next-line no-undef
        fbq("track", "AddToCart", {
          currency: "GBP",
          value: parseInt(price.replace("£", "")),
        });
      }
      // eslint-disable-next-line no-undef
      // const stripe = await Stripe("pk_live_shgxQjmTIkJSJjVJpi8N1RQO00aJHHNIWX");
      // stripe.redirectToCheckout({ sessionId: response.data });
    },
    gtag_report_conversion({ url, value }) {
      const callback = function () {
        // eslint-disable-next-line eqeqeq
        if (typeof url != "undefined") {
          window.location = url;
        }
      };
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push("event", "conversion", {
        send_to: "AW-407043956/2rv5CL35k7kDEPT-i8IB",
        value,
        currency: "GBP",
        event_callback: callback,
      });
      return false;
    },
    uet_report_conversion({ value }) {
      window.uetq = window.uetq || [];
      window.uetq.push("event", "begin_checkout", {
        revenue_value: value,
        currency: "GBP",
      });
    },
  },
};
</script>
