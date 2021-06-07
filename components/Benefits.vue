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

@media (max-width: 992px) {
  .container--benefits {
    grid-template-columns: repeat(2, 1fr)
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
        { subtitle: 'Workout Builder', desc: 'A powerful workout design tool using free-form text editors. Write anything you want.' },
        { subtitle: 'Visualise data', desc: 'Analyse and visualise the programme without spending your entire day entering numbers into spreadsheets. We\'ll handle that.' },
        { subtitle: 'Cloud storage', desc: 'It\'s all on the internet. Access anytime and anywhere.' },
        { subtitle: 'Quick Progression', desc: 'Copy the sessions across a set time-frame with your changes in just a few clicks' },
        { subtitle: 'Sleek and Minimal UI', desc: 'Minimal and easy to understand. Simplicity goes a long way.' },
        { subtitle: 'Super Affordable', desc: 'No complicated pricing plans with different restrictions. Just pay and get instant access.' },
        { subtitle: 'Unlimited Clients', desc: 'There is no limit on the number of clients you can have. Go out there and grow your business.' },
        { subtitle: 'Portfolio', desc: 'Edit your portfolio to share important information with your clients.' },
        { subtitle: 'Templates', desc: 'Create your own pre-made templates to help you programme faster.' }
      ]
    }
  }
}
</script>
