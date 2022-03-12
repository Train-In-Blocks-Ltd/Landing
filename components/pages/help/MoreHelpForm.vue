<style scoped>
.default-button {
  @apply select-none cursor-pointer self-center rounded border-none px-6 py-3 font-bold text-white dark:text-gray-800 bg-gray-800 dark:bg-white transition-all hover:opacity-60 active:scale-95 disabled:opacity-60 disabled:cursor-default;
}
</style>

<template>
  <form
    id="contact"
    class="max-w-xl"
    method="post"
    name="contact_form"
    netlify
    data-netlify-honeypot
    @submit.prevent="send_message"
  >
    <input type="hidden" name="form-name" value="contact_form" />
    <txt-input
      name="name"
      type="text"
      placeholder="Name"
      aria-label="Name"
      required
      :value="contactForm.name"
      class="mb-4"
      @output="(data) => (contactForm.name = data)"
    />
    <txt-input
      v-model="contactForm.email"
      name="email"
      type="email"
      placeholder="Email"
      aria-label="Email"
      required
      :value="contactForm.email"
      class="mb-4"
      @output="(data) => (contactForm.email = data)"
    />
    <txt-area
      v-model="contactForm.message"
      name="message"
      placeholder="Message"
      aria-label="Message"
      required
      :value="contactForm.message"
      class="mb-4"
      @output="(data) => (contactForm.message = data)"
    />
    <label class="flex items-center gap-2 mb-4">
      <input v-model="contactForm.mcConsent" type="checkbox" />
      <span>
        By ticking this box you consent to us adding you to our mailing list.
        <br />
        We promise not to spam you!
      </span>
    </label>
    <div v-if="submitted">
      <txt :class="submittedClasses">
        {{ submitted }}
      </txt>
    </div>
    <button
      v-else
      type="submit"
      class="default-button"
      :disabled="
        contactForm.name === '' ||
        contactForm.email === '' ||
        contactForm.message === '' ||
        !ValidateEmail(contactForm.email)
      "
    >
      Send
    </button>
  </form>
</template>

<script>
import axios from "axios";
import Txt from "../../elements/Txt";
import TxtInput from "../../elements/TxtInput";
import TxtArea from "../../elements/TxtArea";

export default {
  components: {
    Txt,
    TxtInput,
    TxtArea,
  },
  data() {
    return {
      contactForm: {
        name: "",
        email: "",
        confirm: "",
        message: "",
        mcConsent: false,
      },
      submitted: null,
      submittedClasses: "",
    };
  },
  methods: {
    encode(data) {
      return Object.keys(data)
        .map(
          (key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`
        )
        .join("&");
    },
    async send_message() {
      try {
        await axios.post(
          "/",
          this.encode({
            "form-name": "contact_form",
            ...this.contactForm,
          }),
          { header: { "Content-Type": "application/x-www-form-urlencoded" } }
        );
        this.contactForm = {
          name: "",
          email: "",
          confirm: "",
          message: "",
        };
        this.submitted = "Message sent successfully!";
        this.submittedClasses = "text-green-700";
      } catch (e) {
        // eslint-disable-next-line
        console.error(e);
        this.submitted = e.toString() + " Please try again.";
        this.submittedClasses = "text-red-700";
      }
      try {
        if (this.contactForm.mcConsent) {
          await axios.post("/.netlify/functions/mailchimp", {
            email: this.contactForm.email,
          });
        }
      } catch (e) {
        // eslint-disable-next-line
        console.error(e);
      }
    },
    ValidateEmail(mail) {
      if (/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
        return true;
      }
      return false;
    },
  },
};
</script>
