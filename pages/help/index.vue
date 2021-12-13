<style scoped>
/* Contact form */
.contact_form {
  display: grid;
  grid-gap: 1rem;
  margin: 8rem 0;
  max-width: 768px;
}
.contact_form textarea {
  resize: vertical;
}
.click_here {
  cursor: pointer;
  transition: var(--transition-standard);
}
.click_here:hover {
  opacity: 0.6;
}

/* Articles */
.container--help {
  display: grid;
  grid-gap: 8rem;
  margin: 4rem 0;
}
.number_text {
  line-height: 1;
}
.help-post {
  display: flex;
}
.help-post__top-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0 2rem;
}
.help-post__link {
  display: grid;
  grid-template-columns: 160px 24px;
  grid-gap: 0.4rem;
  margin: 2rem 0 0 0;
  transition: grid-gap 0.4s, opacity 0.1s cubic-bezier(0.165, 0.84, 0.44, 1);
}
.help-post__link-text {
  color: var(--base_dark);
  margin: auto 0;
  text-decoration: none;
}
.help-post__link:hover {
  grid-gap: 1rem;
  opacity: 0.8;
}
.help-post__link:active {
  opacity: 0.4;
}

/* Responsiveness */
@media (max-width: 768px) {
  .help-post {
    grid-gap: 2rem;
  }
  .help-post__top-wrapper {
    padding: 0;
  }
  .help-post__link:hover {
    grid-gap: 0.4rem;
    opacity: 1;
  }
}
</style>

<template>
  <div>
    <h1>Need help with something?</h1>
    <h2 class="accent_text">
      <u class="click_here" @click="scroll()"> Click here</u>
      to get in touch or browse our guides
    </h2>
    <div class="container--help">
      <div v-for="post in posts" :key="post.title" class="help-post">
        <div>
          <h2 class="text--xlarge no_margin number_text">
            {{ post.id }}
          </h2>
        </div>
        <div class="help-post__top-wrapper">
          <div>
            <h3 class="no_margin">
              {{ post.title }}
            </h3>
            <p>
              {{ post.postDesc }}
            </p>
          </div>
          <div class="help-post__link">
            <nuxt-link class="help-post__link-text" :to="`/help/${post.slug}/`">
              Continue reading
            </nuxt-link>
            <inline-svg
              class="svg--read-more"
              :src="require('../../assets/svg/Arrow.svg')"
            />
          </div>
        </div>
      </div>
    </div>
    <h2>Need something more specific?</h2>
    <form
      id="contact"
      class="contact_form"
      method="post"
      name="contact_form"
      netlify
      data-netlify-honeypot
      @submit.prevent="send_message"
    >
      <input type="hidden" name="form-name" value="contact_form" />
      <input
        v-model="contactForm.name"
        name="name"
        type="text"
        placeholder="Name"
        class="small_border_radius"
        required
      />
      <input
        v-model="contactForm.email"
        name="email"
        type="email"
        placeholder="Email"
        class="small_border_radius"
        required
      />
      <textarea
        v-model="contactForm.message"
        name="message"
        rows="5"
        placeholder="Message"
        class="small_border_radius"
        required
      />
      <div>
        <button
          :disabled="
            contactForm.name === '' ||
            contactForm.email === '' ||
            contactForm.message === ''
          "
          type="submit"
        >
          Send
        </button>
        <div v-if="submitted">
          <p>
            {{ submitted }}
          </p>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import axios from "axios";

export default {
  async asyncData({ $content }) {
    const posts = await $content("help").fetch();
    posts.sort((b, a) => {
      return b.id - a.id;
    });
    return { posts };
  },
  data() {
    return {
      contactForm: {
        name: "",
        email: "",
        confirm: "",
        message: "",
      },
      submitted: null,
    };
  },
  head() {
    return {
      __dangerouslyDisableSanitizers: ["script"],
      script: [
        {
          innerHTML: `{
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [{
              "@type": "ListItem",
              "position": 2,
              "name": "Help",
              "item": "https://traininblocks.com/help/"
            }]
          }`,
          type: "application/ld+json",
        },
      ],
    };
  },
  beforeCreate() {
    this.$parent.$parent.metaHelper.title = "Support Desk";
    this.$parent.$parent.metaHelper.description =
      "Need help with something? We are happy to help with anything.";
    this.$parent.$parent.metaHelper.url = "https://traininblocks.com/help/";
  },
  methods: {
    scroll() {
      document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
    },
    encode(data) {
      return Object.keys(data)
        .map(
          (key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`
        )
        .join("&");
    },
    async send_message() {
      const self = this;
      try {
        await axios.post(
          "/",
          self.encode({
            "form-name": "contact_form",
            ...self.contactForm,
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
      } catch (e) {
        this.submitted = e.toString() + " Please try again.";
      }
    },
  },
};
</script>
