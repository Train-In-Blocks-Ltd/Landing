<template>
  <div>
    <txt type="title" class="mb-16">The team that's happy to help</txt>
    <div class="grid lg:grid-cols-2 gap-8">
      <card-wrapper
        v-for="(member, index) in team"
        :key="`member-${index}`"
        class="p-4 md:flex"
        no-hover
      >
        <img
          :src="
            require(`../../../assets/images/${member.name
              .toLowerCase()
              .replace(' ', '-')}.jpg?resize&size=240&format=webp`)
          "
          class="w-1/2 mx-auto mb-4 md:ml-0 md:mb-0 md:mr-4 md:w-4/12 h-fit aspect-square object-cover"
        />
        <div class="w-full md:w-8/12">
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
          bio: "I'm an advocate for a free and open web with a passion for pushing the limits of current technologies. I now manage the operations side of the company along with making sure the application is running smoothly.",
        },
        {
          name: "Hannah Goodman",
          role: "Marketing Coordinator",
          bio: "I help Train In Blocks make great marketing decisions. I love working on small business strategies and help entrepreneurs find uncomplicated ways to grow their businesses.",
        },
        {
          name: "Jamie Spoor",
          role: "Copywriter",
          bio: "After graduating in 2019 with a degree in Sports Journalism. I have vast experiences across all platforms of the journalism industry but specialises in print. A self-proclaimed blogger, writer, and freelancer who is happy to try his hand at anything. In my free time, I'm love to play football, go to the gym, walks and read a good book",
        },
      ],
    };
  },
};
</script>
