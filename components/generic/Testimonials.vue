<template>
  <div>
    <txt type="title" class="mb-16 pt-8">Testimonials</txt>
    <div class="flex flex-wrap justify-center gap-8">
      <blockquote
        v-for="testimonial in testimonials"
        :key="testimonial.text"
        v-infocus="'showElement'"
        class="md:w-[calc(50%-2rem)] text-lg fadeHidden"
      >
        <txt>{{ testimonial.text }}</txt>
        <txt class="mt-4 font-bold">- {{ testimonial.name }}</txt>
      </blockquote>
    </div>
    <a href="https://www.google.com/search?q=train+in+blocks&rlz=1C1CHBF_en-GBGB905GB905&oq=train+in+blocks&aqs=chrome.0.69i59j0i22i30l4j69i60l3.1597j0j4&sourceid=chrome&ie=UTF-8#lrd=0x85707bcd5d725553:0x70727b241b22da4e,1,,," target="_blank" class="hover:opacity-60 focus:opacity-60 transition-all w-fit mt-8 block ml-auto mr-auto">
      <txt type="large-body" bold class="text-center">
        Check out more reviews on Google
      </txt>
    </a>
  </div>
</template>

<script>
import Txt from "../elements/Txt.vue";

export default {
  components: {
    Txt,
  },
  data() {
    return {
      testimonials: [
        {
          name: "Kies",
          text: "Train In Blocks has been a huge time saver for me and helped me get a lot of my clients in order. They’ve also found it helpful to have the platform to aid their workouts. It’s easy to navigate and very affordable.",
        },
        {
          name: "Nicola",
          text: "The app is perfect for storing client data, making programming easy, and more organised. So much more affordable than other software and just as good! I love the features that come with it and guidance on how to use them.",
        },
        {
          name: "Dave",
          text: "I love using Train In Blocks. It has helped me to create detailed training sessions for my clients, track their progress, and to divide different stages of my clients’ training. It’s so easy to use and looks very smart too at a very good price point.",
        },
      ],
    };
  },
};
</script>
