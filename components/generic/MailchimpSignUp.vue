<style scoped>
.email {
  max-width: 24rem!important;
}
.email.red {
  border-color: rgb(185, 28, 28)
}
.email.green {
  border-color: rgb(21, 128, 61)
}
</style>
<template>
  <form
    class="grid gap-2 w-full"
    @submit.prevent="mc(email)"
  >
    <slot />
    <div class="flex justify-center items-center flex-wrap gap-2">
      <input
        v-model="email"
        type="email"
        class="txt-input email max-w-full"
        :class="inputClasses"
        placeholder="Email"
        required
      />
      <button type="submit" class="default-button normal" :disabled="!email || !ValidateEmail(email)">
        Yes, sign me up
      </button>
    </div>
    <p class="text-sm mt-4 mb-8" :class="messageClasses" v-text="message" />
  </form>
</template>

<script>
import axios from "axios"

export default {
  data() {
    return {
      email: "",
      message: "By clicking sign up you consent to us adding you to our mailing list. We promise not to spam you!",
      messageClasses: "",
      inputClasses: "",
    };
  },
  methods: {
    async mc(email) {
      try {
        await axios.post("/.netlify/functions/mailchimp", {
          email
        })
        this.message =
          "To complete the subscription process, please click the link in the email we just sent you.";
        this.messageClasses =
          "text-green-700";
        this.inputClasses =
          "green";
      } catch (e) {
        if (e.response.status === 400) {
          this.message =
            "You're already signed up to our mailing list. Thank you!";
          this.messageClasses =
            "text-red-700";
          this.inputClasses =
            "red";
        } else {
          // eslint-disable-next-line
          console.error(e);
          this.message = e.response.data;
        }
      }
    },
    ValidateEmail(mail) {
      if (/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
        return (true)
      }
      return (false)
    },
  },
}

</script>