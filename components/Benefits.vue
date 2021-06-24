<style scoped>
.container--benefits {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 4rem
}
.benefits {
  padding: 1rem 2rem;
  border: 3px solid var(--base_dark);
  border-radius: var(--border_rad_large)
}
.benefits > svg {
  display: flex;
  margin: auto;
  height: 70px
}

@media (max-width: 992px) {
  .container--benefits {
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 2rem
  }
}
@media (max-width: 576px) {
  .container--benefits {
    grid-template-columns: 1fr
  }
}
</style>

<template>
  <div>
    <h1>
      Benefits and features
    </h1>
    <div class="spacer--small" />
    <div class="container--benefits">
      <div v-for="(item, index) in benefits" :key="`benefit_${index}`" class="benefits">
        <inline-svg :src="require(`../assets/svg/features/${item.svg}.svg`)" />
        <h3>
          {{ item.subtitle }}
        </h3>
        <p>
          {{ item.desc }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      benefits: [
        {
          subtitle: 'Workout Builder',
          desc: 'A powerful workout design tool using free-form text editors. Write anything you want.',
          svg: 'editor'
        },
        {
          subtitle: 'Visualise data',
          desc: 'Analyse and visualise the programme without spending your entire day entering numbers into spreadsheets. We\'ll handle that.',
          svg: 'data'
        },
        {
          subtitle: 'Cloud storage',
          desc: 'It\'s all on the internet. Access anytime and anywhere.',
          svg: 'cloud'
        },
        {
          subtitle: 'Quick Progression',
          desc: 'Copy the sessions across a set time-frame with your changes in just a few clicks',
          svg: 'progress'
        },
        {
          subtitle: 'Sleek and Minimal UI',
          desc: 'Minimal and easy to understand. Simplicity goes a long way.',
          svg: 'design'
        },
        {
          subtitle: 'Super Affordable',
          desc: 'No complicated pricing plans with different restrictions. Just pay and get instant access.',
          svg: 'dollar'
        },
        {
          subtitle: 'Unlimited Clients',
          desc: 'There is no limit on the number of clients you can have. Go out there and grow your business.',
          svg: 'infinity'
        },
        {
          subtitle: 'Portfolio',
          desc: 'Edit your portfolio to share important information with your clients.',
          svg: 'payment'
        },
        {
          subtitle: 'Templates',
          desc: 'Create your own pre-made templates to help you programme faster.',
          svg: 'template'
        }
      ]
    }
  }
}
</script>
