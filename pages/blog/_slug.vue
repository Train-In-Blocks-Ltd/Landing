<style>
blockquote {
  @apply my-6 px-2 pt-12 pb-4 md:py-8 md:px-12 shadow-lg rounded-lg border-3 border-slate dark:border-white rounded-lg text-slate dark:text-white bg-white dark:bg-slate text-center font-bold relative leading-normal	text-xl md:text-2xl;
}
blockquote::after {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512' style='fill: rgb(40 40 40)'%3E%3C!----%3E%3Cpath d='M464 256h-80v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8c-88.4 0-160 71.6-160 160v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48zm-288 0H96v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8C71.6 32 0 103.6 0 192v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48z'/%3E%3C/svg%3E");
  @apply absolute w-8 h-8 left-2 top-2 content-[""];
}
.dark blockquote::after {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512' style='fill: white'%3E%3C!----%3E%3Cpath d='M464 256h-80v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8c-88.4 0-160 71.6-160 160v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48zm-288 0H96v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8C71.6 32 0 103.6 0 192v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48z'/%3E%3C/svg%3E");
}
.nuxt-content blockquote p {
  @apply mb-0;
}
blockquote cite {
  @apply hidden;
}
.preview {
  @apply relative;
}
.preview::after {
  @apply absolute w-full h-full bg-gradient-to-b from-transparent to-white content-[''] top-0 left-0;
}
</style>

<template>
  <article-wrapper>
    <v-back-button link="/blog/" />
    <img
      v-if="post.img"
      :src="
        require(`../../assets/media-uploads/${post.img}?resize&size=600&format=webp`)
      "
      :alt="post.alt || post.title"
      class="w-full aspect-square object-cover max-w-lg m-auto"
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
      <div class="nuxt-content preview">
        <template v-for="(element, index) in post.bodyHtml.split('\n')">
          <span
            v-if="element.startsWith('<p>') && index < 6"
            :key="index"
            v-html="element"
          />
        </template>
      </div>
      <card-wrapper class="p-4 lg:w-3/4 mx-auto mb-16 -mt-36 relative" no-hover>
        <txt type="large-body" class="mb-8" bold
          >Sign up to read the full article</txt
        >
        <mailchimp-sign-up tag="Blog" :on-exist="() => (existingLead = true)" />
      </card-wrapper>
      <hr />
    </div>
    <blog-footer class="mt-16 lg:w-3/4 mx-auto" />
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
          content: this.post.img
            ? require(`../../assets/media-uploads/${this.post.img}?resize&size=600&format=webp`)
            : "https://traininblocks.com/android-chrome-512x512.png?v=192",
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
          content: this.post.img
            ? require(`../../assets/media-uploads/${this.post.img}?resize&size=600&format=webp`)
            : "https://traininblocks.com/android-chrome-512x512.png?v=192",
        },
        {
          hid: "og:url",
          name: "og:url",
          content: `https://traininblocks.com/blog/${this.$route.params.slug}/`,
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
