<template>
  <page-wrapper>
    <txt type="title" is-main>
      How do we compare against {{ details.name }}?
    </txt>
    <txt type="title" class="mb-16" grey>Here's a breakdown...</txt>
    <div class="grid lg:grid-cols-2 gap-8 mb-16">
      <card-wrapper class="p-4" no-hover theme="green">
        <txt type="subtitle" bold>Train In Blocks</txt>
        <txt type="large-body" grey>£9.99 per month</txt>
        <ul>
          <li>No limits on clients or programmes</li>
          <li>Cancel anytime and with ease</li>
          <li>No complicated pricing structure</li>
          <li>Instant access</li>
          <li>Client can access their programmes easily</li>
          <li>Minimal and easy to use with features that are relevant</li>
        </ul>
      </card-wrapper>
      <card-wrapper class="p-4" no-hover theme="red">
        <txt type="subtitle" bold>
          {{ details.name }}
        </txt>
        <txt type="large-body" grey>
          {{ details.price }}
        </txt>
        <ul>
          <li
            v-for="(desc, index) in details.price_desc"
            :key="`desc_${index}`"
          >
            {{ desc }}
          </li>
        </ul>
      </card-wrapper>
    </div>
    <payment class="mb-32" />
    <benefits class="mb-32" />
    <testimonials />
  </page-wrapper>
</template>

<script>
import Txt from "../../elements/Txt";
import CardWrapper from "../../generic/CardWrapper";
import Benefits from "../Benefits";
import Payment from "../Payment";
import PageWrapper from "~/components/generic/PageWrapper";
import Testimonials from "~/components/generic/Testimonials";

export default {
  components: {
    Txt,
    Payment,
    Benefits,
    CardWrapper,
    PageWrapper,
    Testimonials,
  },
  props: {
    details: {
      type: Object,
      default: null,
    },
  },
};
</script>
