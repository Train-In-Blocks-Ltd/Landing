<style scoped>
  /* Container */
  .container--progress {
    display: flex;
    align-items: center
  }

  /* Misc. */
  #roadmap {
    display: grid;
    margin: 2rem 0 6rem 0;
    grid-template-columns: .2fr 1fr
  }
  .roadmap__progress {
    font-size: .8rem;
    margin: 0 .4rem 0 0
  }
  .roadmap__title {
    font-weight: 700;
    margin: 1rem 0
  }
  .roadmap__desc {
    margin: 1rem 0
  }
  .icon--main {
    width: 5rem;
    margin: auto 0
  }
  .icon--progress {
    text-align: center;
    width: 1.5rem;
    height: auto;
    margin: 0 .2rem
  }
  .completed {
    opacity: .4
  }

  /* Responsive */
  @media (max-width: 992px) {
    #roadmap {
      grid-gap: 3rem
    }
    .roadmap--title {
      font-size: 1rem
    }
  }
  @media (max-width: 576px) {
    #roadmap {
      grid-template-columns: 1fr;
      grid-gap: 1rem
    }
  }
</style>

<template>
  <div>
    <h1 class="paper--title">
      {{ title }}
    </h1><br>
    <h2 class="sub-title">
      We believe in transparency, check out what we're up to.
    </h2>
    <div class="spacer" />
    <div v-for="dev in development" id="roadmap" :key="dev.id" :class="{ completed: dev.completed === true }">
      <inline-svg class="icon--main" :src="dev.icon" />
      <div>
        <div class="container--progress">
          <p class="roadmap__progress">
            {{ dev.progress }}
          </p>
          <inline-svg class="icon--progress" :src="dev.progressIcon" />
        </div>
        <p class="roadmap__title">
          {{ dev.title }}
        </p>
        <p class="roadmap__desc">
          {{ dev.desc }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import InlineSvg from 'vue-inline-svg'
import Done from '../assets/svg/progress/Done.svg'
import InDev from '../assets/svg/progress/InDev.svg'
import Planned from '../assets/svg/progress/Planned.svg'
// import Scheduled from '../assets/svg/progress/Scheduled.svg'
import Idea from '../assets/svg/roadmap/build.svg'
import UserTested from '../assets/svg/roadmap/user-test.svg'
import Released from '../assets/svg/roadmap/launch.svg'
import Upgrade from '../assets/svg/roadmap/update.svg'
import Nutrition from '../assets/svg/roadmap/salad.svg'
import CompLib from '../assets/svg/roadmap/books.svg'
import Report from '../assets/svg/roadmap/report.svg'
import Payment from '../assets/svg/roadmap/payment.svg'

export default {
  components: {
    InlineSvg
  },
  data () {
    return {
      title: 'Our Roadmap...',
      development: [
        { id: 1, completed: true, icon: Idea, progress: '17.07.20', progressIcon: Done, title: 'Prototyping', desc: 'Mastering and building essential features.' },
        { id: 2, completed: true, icon: UserTested, progress: '31.07.20', progressIcon: Done, title: 'User Testing', desc: 'Getting some feedback and improving the app from the get-go.' },
        { id: 3, completed: true, icon: Released, progress: '01.08.20', progressIcon: Done, title: 'Launch', desc: 'Our big day! Giving you a new way to build programmes, earn more and to expand your business.' },
        { id: 4, completed: false, icon: Upgrade, progress: 'In-Progress', progressIcon: InDev, title: 'Post-Launch Patch', desc: 'Patching it up to give you guys the latest.' },
        { id: 5, completed: false, icon: Nutrition, progress: 'Planned', progressIcon: Planned, title: 'Nutrition', desc: 'Giving you the tools to help your clients feel stronger and healthier.' },
        { id: 6, completed: false, icon: CompLib, progress: 'Planned', progressIcon: Planned, title: 'Component Library', desc: 'Build a bespoke exercise programme even faster with shortcuts and more.' },
        { id: 7, completed: false, icon: Report, progress: 'Planned', progressIcon: Planned, title: 'Report Generator', desc: 'Create a professional report to present your client\'s progress.' },
        { id: 8, completed: false, icon: Payment, progress: 'Planned', progressIcon: Planned, title: 'Payment Solutions', desc: 'Make pricing plans and packages to help you sell your services.' }
      ]
    }
  },
  mounted () {
    this.$parent.$parent.metaHelper.title = 'Here’s Our Journey, Join Us'
    this.$parent.$parent.metaHelper.description = 'We love for you to get involved in our development. Vote for new features and join our community of health and fitness professionals.'
  }
}
</script>
