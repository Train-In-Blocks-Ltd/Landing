<template>
  <div>
    <txt type="title" class="mb-16 pt-8">Testimonials</txt>
    <div class="grid gap-8 md:grid-cols-2">
      <div
        v-for="testimonial in testimonials"
        :key="testimonial.text"
        class="grid gap-4 text-center"
      >
        <txt class="italic">"{{ testimonial.text }}"</txt>
        <txt>- {{ testimonial.name }}</txt>
      </div>
    </div>
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
