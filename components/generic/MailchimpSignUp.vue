<template>
  <form class="grid gap-2 w-full" @submit.prevent="mc(email)">
    <slot />
    <div class="flex justify-center items-center">
      <txt-input
        :value="email"
        class="w-1/2 mr-4"
        placeholder="Email"
        type="email"
        required
        @output="(data) => (email = data)"
      />
      <default-button
        type="submit"
        class="z-10"
        :disabled="!email || !ValidateEmail(email)"
      >
        Sign me up
      </default-button>
    </div>
    <txt class="mt-4 mb-8" :class="messageClasses">
      {{ message }}
    </txt>
  </form>
</template>

<script>
import axios from "axios";
import Txt from "../elements/Txt";
import TxtInput from "../elements/TxtInput";
import DefaultButton from "../elements/DefaultButton";

export default {
  components: {
    Txt,
    TxtInput,
    DefaultButton,
  },
  props: {
    onExist: Function,
  },
  data() {
    return {
      email: "",
      message:
        "By clicking sign up you consent to us adding you to our mailing list. We promise not to spam you!",
      messageClasses: "",
    };
  },
  methods: {
    async mc(email) {
      try {
        await axios.post("/.netlify/functions/mailchimp", {
          email,
        });
        this.onExist();
        window.localStorage.setItem("existing-lead", true);
        this.message =
          "To complete the subscription process, please click the link in the email we just sent you.";
        this.messageClasses = "text-green-700";
        if (this.$cookies.isEnabled("Google Analytics")) {
          this.gtag_report_conversion();
        }
        if (this.$cookies.isEnabled("Facebook Pixel")) {
          // eslint-disable-next-line no-undef
          fbq("track", "CompleteRegistration", { email });
        }
      } catch (e) {
        this.onExist();
        window.localStorage.setItem("existing-lead", true);
        if (e.response.status === 400) {
          this.message =
            "You're already signed up to our mailing list. Thank you!";
          this.messageClasses = "text-red-700";
        } else {
          // eslint-disable-next-line
          console.error(e);
          this.message = e.response.data;
        }
      }
    },
    ValidateEmail(mail) {
      if (/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
        return true;
      }
      return false;
    },
    gtag_report_conversion(url) {
      const callback = function () {
        // eslint-disable-next-line eqeqeq
        if (typeof url != "undefined") {
          window.location = url;
        }
      };
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push("event", "conversion", {
        send_to: "AW-407043956/0H1UCNjR4LgDEPT-i8IB",
        value: 9.99,
        event_callback: callback,
      });
      return false;
    },
  },
};
</script>
