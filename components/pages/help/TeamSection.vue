<template>
  <div>
    <txt type="title" class="mb-16">The team that's happy to help</txt>
    <div class="grid lg:grid-cols-2 gap-8">
      <card-wrapper
        v-for="(member, index) in team"
        :key="`member-${index}`"
        class="p-4 flex"
        no-hover
      >
        <inline-svg
          :src="require('../../../assets/svg/user.svg')"
          class="w-1/6 md:w-1/12 lg:w-1/6 h-fit mr-4"
        />
        <div class="w-5/6 md:w-11/12 lg:w-5/6">
          <txt type="subtitle">{{ member.name }}</txt>
          <txt type="large-body" class="mb-2">{{ member.role }}</txt>
          <txt>{{ member.bio }}</txt>
        </div>
      </card-wrapper>
    </div>
  </div>
</template>

<script>
import Txt from "~/components/elements/Txt.vue";
import CardWrapper from "~/components/generic/CardWrapper.vue";

export default {
  components: { CardWrapper, Txt },
  data() {
    return {
      team: [
        {
          name: "Mikey Lau",
          role: "Director",
          bio: "After graduating and spending time in the fitness industry, I saw the importance of health and fitness first-hand working with the general and clinical population. I've noticed how trainers needed a one-stop shop solution to managing their clientele so that's why we founded Train In Blocks. Less time managing means more time on the gym-floor.",
        },
        {
          name: "Joe Bailey",
          role: "Director",
          bio: "Some bio",
        },
        {
          name: "Hannah Goodman",
          role: "Marketing Coordinator",
          bio: "I help Train In Blocks make great marketing decisions. I love working on small business strategy. And helping business owners find uncomplicated ways to grow their own businesses.",
        },
        {
          name: "Jamie Spoor",
          role: "Copywriter",
          bio: "Some bio",
        },
      ],
    };
  },
};
</script>
