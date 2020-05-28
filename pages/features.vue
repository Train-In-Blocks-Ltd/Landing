<template>
  <div>
    <h1 class="paper--title">
      {{ title }}
    </h1>
    <div class="container--2c">
      <div id="editor">
        <div class="workout-header">
          <div class="workout-header__name-wrapper">
            <p class="workout-header__name">Upper Body - Push</p>
            <inline-svg class="svg--info" @click="showFormat()" :src="require('../assets/svg/demo/Info.svg')"/>
          </div>
          <p class="workout-header__date">06.09.20</p>
        </div>
        <quill v-model="quillContent" output="html" :config="quillConfig"/>
      </div>
      <div id="text">
        <p><b>How do we track performance? Spreadsheets right?</b></p>
        <p>No.</p>
        <p><b>Numbers in boxes and clicking back and forth?</b></p>
        <p>No.</p>
        <p><b>Say Goodbye to Manually Tracking Data.</b></p>
        <p>Our app will understand the workouts and will do all the math for you. That's right. You build, visualise, adjust and adapt even before the first session.</p>
      </div>
    </div>
    <div class="spacer" />
    <div class="container--chart">
      <div id="stats">
        <h2>Statistics</h2>
        <div class="container--data">
          <p class="main">Total Sets: </p>
          <p class="result">Result</p>
        </div>
        <div class="container--data">
          <p class="main">Average Sets: </p>
          <p class="result">Result</p>
        </div>
        <div class="container--data">
          <p class="main">Maximum Sets: </p>
          <p class="result">Result</p>
        </div>
        <div class="container--data">
          <p class="main">Minimum Sets: </p>
          <p class="result">Result</p>
        </div>
        <div class="container--data">
          <p class="">Percentage change (%): </p>
          <p class="result">Result</p>
        </div>
      </div>
      <line-chart id="chart" :chart-data="this.dataCollection" :options="this.options" />
    </div>
    <div class="spacer" />
    <h1>{{ featuresTitle }}</h1><br>
    <div v-for="feature in features" :key="feature.id" class="container--features">
      <inline-svg class="icon" :src="feature.icon" />
      <div>
        <h2>{{ feature.subtitle }}</h2>
        <p>{{ feature.desc }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import InlineSvg from 'vue-inline-svg'
import LineChart from '../components/Chart'
import reduceTime from '../assets/svg/features/reduceTime.svg'
import powerful from '../assets/svg/features/powerful.svg'
import visualGrid from '../assets/svg/features/visualGrid.svg'
import cloud from '../assets/svg/features/cloud.svg'
import easyPlanning from '../assets/svg/features/easyPlanning.svg'
import sleek from '../assets/svg/features/sleek.svg'
import cheap from '../assets/svg/features/cheap.svg'
import noLimits from '../assets/svg/features/noLimits.svg'
import toolkit from '../assets/svg/features/toolkit.svg'
import learn from '../assets/svg/features/learn.svg'

export default {
  components: {
    LineChart,
    InlineSvg
  },
  data () {
    return {
      title: 'Go on...try before you buy!',
      featuresTitle: 'What\'s included?',
      features: [
        { id: 1, subtitle: 'Save Time', desc: 'Create a new long-term bespoke programme in less than 15 minutes.', icon: reduceTime },
        { id: 2, subtitle: 'Workout Builder', desc: 'A powerful workout design tool using free-form text editors. Write anything you want.', icon: powerful },
        { id: 3, subtitle: 'Visuals', desc: 'Analyse and visualise the programme without spending your day entering numbers into boxes. We\'ll handle that.', icon: visualGrid },
        { id: 4, subtitle: 'Cloud', desc: 'It\'s all on the internet. Access anytime and anywhere.', icon: cloud },
        { id: 5, subtitle: 'Easy Planning', desc: 'Copy the workouts across a set time-frame with one-click. Then make any changes required for progression.', icon: easyPlanning },
        { id: 6, subtitle: 'Sleek and Minimal UI', desc: 'Minimal and easy to understand. Simplicity goes a long way.', icon: sleek },
        { id: 7, subtitle: 'Super Affordable', desc: 'No complicated pricing plans with different restrictions. Just pay and get instant access.', icon: cheap },
        { id: 8, subtitle: 'Unlimited Clients', desc: 'There is no limit on the number of clients you can have. Go out there and get more.', icon: noLimits },
        { id: 9, subtitle: 'In-Session Toolkit', desc: 'Ready-to-use calculators to help you deliver an outstanding session.', icon: toolkit },
        { id: 10, subtitle: 'Connect, Learn and Grow', desc: 'Access resources and materials to boost your career by staying up-to-date with the industry. Have a say in our development as well.', icon: learn }
      ],
      quillContent: '<p><b>Warm-Up</b></p><p>A) Treadmill: 10 min </p><p>- Take it light and easy.</p><br><p><b>Main CV</b></p><p>B) Rower: 1500m</p><p>- Back straight </p><p>- Legs, arms, and legs</p><p>- Push hard!!</p><p><br><b>Main resistance</b></p><p>A) Bench Press: 2x20 at 40/45kg</p><p>B) Incline Dumbbell Press: 2x18 at 14/16kg</p><p>C) Decline Dumbbell Press: 2x16 at 12/14kg</p><br><p><b>Cooldown</b></p><p>A) Foam Roll and Stretch: 10 min</p><p>- Whole-body, do as much as you can</p>',
      quillConfig: {
        modules: {
          toolbar: [
            [{ header: 1 }, { header: 2 }],
            ['bold', 'italic', 'underline', 'strike'],
            [{ script: 'sub' }, { script: 'super' }],
            ['link'],
            ['clean']
          ]
        },
        placeholder: 'Start programming...'
      },
      dataCollection: {
        labels: [1, 2, 3, 4, 5, 6, 7, 8],
        datasets: [
          {
            label: 'Load (kg)',
            borderColor: '#282828',
            backgroundColor: 'transparent',
            data: [20, 30, 40, 40, 44, 50, 49, 60]
          }
        ]
      },
      options: {
        chartOptions: {
          responsive: true,
          maintainAspectRatio: false
        },
        scales: {
          yAxes: [{
            ticks: {
              stepSize: 1
            }
          }]
        }
      }
    }
  },
  methods: {
    showFormat () {
      this.$modal.show('format')
    }
  },
  head () {
    return {
      title: 'Demo',
      meta: [
        { hid: 'description', name: 'description', content: '' },
        { hid: 'og:title', content: 'Demo' },
        { hid: 'twitter:title', content: 'Demo' },
        { hid: 'og:url', content: '/features' }
      ]
    }
  }
}
</script>

<style scoped>
  /* Containers */
  h2, .container--intro p {
    margin: 1.5rem 0
  }
  .container--2c {
    display: grid;
    grid-template-columns: .6fr 1fr
  }
  .container--2c p {
    margin: 1.5rem 0
  }

  /* Editor */
  #editor {
    width: 250px;
    border: 1px solid #282828;
    margin: auto
  }
  .workout-header {
    padding: .4rem 1rem;
    background-color: white
  }
  .workout-header__name-wrapper {
    display: grid;
    grid-template-columns: 1fr 20px;
    grid-gap: .4rem
  }
  .svg--info {
    cursor: pointer;
    margin: auto;
    width: 20px;
    height: 20px;
    transition: opacity .4s, transform .1s cubic-bezier(.165, .84, .44, 1)
  }
  .svg--info:hover {
    opacity: .6
  }
  .svg--info:active {
    transform: scale(.9)
  }
  p.workout-header__name {
    margin: 0;
    font-weight: bold
  }
  p.workout-header__date {
    margin: 0;
    font-size: .8rem
  }

  /* Chart and Stats */
  .container--chart {
    display: grid;
    grid-template-columns: .4fr 1fr
  }
  #chart {
    margin: auto
  }
  #stats {
    text-align: right
  }
  .main {
    font-weight: bold
  }
  .container--data {
    display: grid;
    grid-template-columns: 1fr .4fr
  }
  .container--data p {
    margin: .4rem 0
  }

  /* Features */
  .container--features {
    width: 100%;
    margin: 4rem 0
  }
  .container--features > div > p {
    width: 80%;
    margin: 1rem 0
  }
  .icon {
    margin: auto;
    text-align: center
  }

  /* Responsive */
  @media (max-width: 992px) {
    .container--2c {
      grid-template-columns: 300px 1fr
    }
    #editor {
      margin: auto 0
    }
  }
  @media (max-width: 768px) {
    .container--2c {
      flex-direction: column-reverse
    }
    #text {
      margin: 2rem 0
    }
  }
  @media (max-width: 360px) {
    #editor {
      width: 100%
    }
    .container--features {
      grid-template-columns: 1fr;
      grid-template-rows: .4fr 1fr;
      grid-gap: 2rem
    }
  }
</style>
