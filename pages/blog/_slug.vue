<template>
  <article-wrapper>
    <v-back-button link="/blog/" />
    <img
      :src="
        require(`../../assets/media-uploads/${post.img}?resize&size=600&format=webp`)
      "
      :alt="post.alt || post.title"
      class="w-full aspect-square object-cover max-w-lg m-auto gray"
      loading="lazy"
    />
    <txt type="title" class="mt-8 mb-4" is-main>
      {{ post.title }}
    </txt>
    <txt type="large-body" grey>Created by {{ post.author }}</txt>
    <txt type="large-body" class="mb-4" grey>{{ shortDate(post.date) }}</txt>
    <txt type="large-body" class="mb-16" grey
      >{{ post.readTime }} minute read</txt
    >
    <nuxt-content v-if="existingLead || !post.exclusive" :document="post" />
    <div v-else>
      <card-wrapper class="p-4 lg:w-1/2 mx-auto mb-16" no-hover>
        <txt type="large-body" class="mb-8" bold
          >Sign up to read the full article</txt
        >
        <mailchimp-sign-up :on-exist="() => (existingLead = true)" />
      </card-wrapper>
      <hr />
    </div>
    <blog-footer class="mt-16" />
  </article-wrapper>
</template>

<script>
import Txt from "../../components/elements/Txt";
import BlogFooter from "../../components/pages/blog/BlogFooter";
import VBackButton from "~/components/generic/VBackButton";
import ArticleWrapper from "~/components/generic/ArticleWrapper";
import MailchimpSignUp from "~/components/generic/MailchimpSignUp.vue";
import CardWrapper from "~/components/generic/CardWrapper.vue";

export default {
  components: {
    Txt,
    BlogFooter,
    VBackButton,
    ArticleWrapper,
    MailchimpSignUp,
    CardWrapper,
  },
  async asyncData({ $content, params }) {
    const post = await $content("blog", { text: true }, params.slug).fetch();
    const avgWordsPerMin = 200;
    const count = post.text.match(/\w+/g).length;
    const readTime = Math.ceil(count / avgWordsPerMin);
    return { post: { ...post, readTime } };
  },
  data() {
    return {
      existingLead: false,
    };
  },
  head() {
    return {
      title: this.post.title,
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.post.postDesc,
        },
        { hid: "og:title", name: "og:title", content: this.post.title },
        {
          hid: "og:description",
          name: "og:description",
          content: this.post.postDesc,
        },
        {
          hid: "og:image",
          name: "og:image",
          content: require(`../../assets/media-uploads/${this.post.img}?resize&size=600&format=webp`),
        },
        {
          hid: "twitter:title",
          name: "twitter:title",
          content: this.post.title,
        },
        {
          hid: "twitter:description",
          name: "twitter:description",
          content: this.post.postDesc,
        },
        {
          hid: "twitter:img",
          name: "twitter:img",
          content: require(`../../assets/media-uploads/${this.post.img}?resize&size=600&format=webp`),
        },
      ],
      link: [
        {
          hid: "canonical",
          rel: "canonical",
          href: `https://traininblocks.com/blog/${this.$route.params.slug}/`,
        },
      ],
      __dangerouslyDisableSanitizers: ["script"],
      script: [
        {
          innerHTML: `{
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [{
              "@type": "ListItem",
              "position": 2,
              "name": "Blog",
              "item": "https://traininblocks.com/blog/"
            }]
          }`,
          type: "application/ld+json",
        },
        {
          innerHTML: `{
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [{
              "@type": "ListItem",
              "position": 3,
              "name": "${this.post.title}",
              "item": "https://traininblocks.com/blog/${this.$route.params.slug}/"
            }]
          }`,
          type: "application/ld+json",
        },
      ],
    };
  },
  mounted() {
    this.existingLead = window.localStorage.getItem("existing-lead");
  },
  methods: {
    shortDate(date) {
      const d = new Date(date);
      return `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`;
    },
  },
};
</script>
