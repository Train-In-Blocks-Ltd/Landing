<style scoped>
  .container--benefits {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 4rem
  }
  .benefits {
    padding: 1rem 2rem;
    background-color: var(--fore);
    border-radius: var(--border_rad_large);
    box-shadow: var(--low_shadow)
  }

  @media (max-width: 992px) {
    .container--benefits {
      grid-template-columns: 1fr 1fr
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
        <h2>
          {{ item.subtitle }}
        </h2>
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
        { subtitle: 'Visuals', desc: 'Analyse and visualise the programme without spending your day entering numbers into boxes. We\'ll handle that.' },
        { subtitle: 'Cloud', desc: 'It\'s all on the internet. Access anytime and anywhere.' },
        { subtitle: 'Quick Progression', desc: 'Copy the sessions across a set time-frame with your changes in just a few clicks' },
        { subtitle: 'Sleek and Minimal UI', desc: 'Minimal and easy to understand. Simplicity goes a long way.' },
        { subtitle: 'Super Affordable', desc: 'No complicated pricing plans with different restrictions. Just pay and get instant access.' },
        { subtitle: 'Unlimited Clients', desc: 'There is no limit on the number of clients you can have. Go out there and get more.' },
        { subtitle: 'Portfolio', desc: 'Edit your portfolio to share important information with your clients.' },
        { subtitle: 'Templates', desc: 'Create your own pre-made templates to help you programme faster.' }
      ]
    }
  }
}
</script>
