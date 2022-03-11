<style scoped>
#mc-embedded-subscribe-form {
  @apply mb-8;
}
#mc-embedded-subscribe-form label {
  @apply font-bold text-gray-800 dark:text-white;
}
#mc-embedded-subscribe {
  @apply select-none cursor-pointer self-center rounded border-none px-6 py-2 font-bold text-white dark:text-gray-800 text-sm bg-gray-800 dark:bg-white transition-all hover:opacity-60 active:scale-95;
}
#mce-EMAIL {
  @apply w-full px-2 py-3 font-sans outline-none text-base bg-transparent text-gray-800 dark:text-white border-2 border-gray-400 dark:border-gray-200 rounded-lg hover:border-gray-800 focus:border-gray-800 dark:hover:border-white dark:focus:border-white transition-all;
}
</style>

<template>
  <card-wrapper
    class="md:flex relative justify-center items-center mx-auto w-full lg:w-2/3 xl:1/3 px-8 pt-4"
    no-hover
  >
    <img
      height="auto"
      width="auto"
      :src="require('../../assets/images/trainer-facing.png?webp')"
      class="z-0 absolute top-0 right-0 gray opacity-20 h-64 md:mr-12 md:relative md:opacity-100"
      alt="Trainer"
      loading="lazy"
    />
    <form
      id="mc-embedded-subscribe-form"
      method="post"
      name="mc-embedded-subscribe-form"
      class="validate grid gap-2 w-full my-12"
      novalidate
      @submit.prevent="mcSignup"
    >
      <label for="mce-EMAIL" class="mb-4"
        >Want to manage your clients easily?</label
      >
      <input
        id="mce-EMAIL"
        v-model="email"
        type="email"
        name="EMAIL"
        class="email z-10"
        style="background-color: white"
        placeholder="Email"
        required
      />
      <div class="clear mt-4">
        <input
          id="mc-embedded-subscribe"
          type="submit"
          value="Yes, sign me up"
          name="subscribe"
          class="button"
        />
        <p class="mt-4" style="min-height: 1.5em" v-text="message" />
      </div>
    </form>
  </card-wrapper>
</template>

<script>
import axios from "axios";
import CardWrapper from "../generic/CardWrapper";

export default {
  components: {
    CardWrapper,
  },
  data() {
    return {
      email: "",
      message: " ",
    };
  },
  methods: {
    async mcSignup() {
      try {
        await axios.post("/.netlify/functions/mailchimp", {
          email: this.email,
        });
        this.message =
          "To complete the subscription process, please click the link in the email we just sent you.";
      } catch (e) {
        if (e.response.status === 400) {
          this.message =
            "You're already signed up to our mailing list. Thank you!";
        } else {
          // eslint-disable-next-line
          console.error(e);
          this.message = e.response.data;
        }
      }
    },
  },
};
</script>
