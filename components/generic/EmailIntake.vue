<template>
  <card-wrapper
    v-infocus="'showElement'"
    class="md:flex relative justify-center items-center text-center mx-auto w-full xl:w-2/3 2xl:1/3 px-8 pt-4 fadeHidden"
    no-hover
  >
    <img
      height="auto"
      width="auto"
      :src="
        require('../../assets/images/trainer-facing.png?resize&size=300&format=webp')
      "
      class="h-64 mr-12 relative opacity-100 hidden md:block"
      alt="Trainer"
      loading="lazy"
    />
    <mailchimp-sign-up tag="Home">
      <txt type="subtitle" class="my-4">
        Want to manage your clients easily?
      </txt>
    </mailchimp-sign-up>
  </card-wrapper>
</template>

<script>
import Txt from "../elements/Txt";
import CardWrapper from "./CardWrapper";
import MailchimpSignUp from "./MailchimpSignUp";

export default {
  components: {
    CardWrapper,
    MailchimpSignUp,
    Txt,
  },
};
</script>
