<template>
  <div>
    <h1 class="paper--title">{{title}}</h1>
    <div class="container--2c">
      <Editor id="editor"></Editor>
      <div id="text">
        <p><b>How do we track performance? Spreadsheets right?</b></p>
        <p>No.</p>
        <p><b>Numbers in boxes and clicking back and forth?</b></p>
        <p>No.</p>
        <p><b>Say Goodbye to Manually Tracking Data.</b></p>
        <p>Our app will understand the workouts and will do all the math for you. That's right. You build, visualise, adjust and adapt even before the first session.</p>
        <p><b>Just learn the format</b><br>
          A) Back Squat: 3 x 6 at 70/80/90kg<br>
          B) Bench Press: 2 x 20/15 at 50/55kg</p>
      </div>
    </div>
    <div class="spacer"></div>
    <div>
      <line-chart id="chart--line"></line-chart><br><br>
      <div id="stats">
        <h2>Statistics</h2>
        <select id="dataCat">
          <option>Select a Measure</option>
          <option>Sets</option>
          <option>Reps</option>
          <option>Load</option>
          <option>Volume</option>
        </select>
      </div>
    </div>
    <div class="spacer"></div>
    <h1>{{featuresTitle}}</h1><br>
    <div class="container--features" v-for="feature in features" :key="feature.id">
      <inline-svg class="icon" :src="feature.icon"/>
      <div>
        <h2>{{feature.subtitle}}</h2>
        <p>{{feature.desc}}</p>
      </div>
    </div>
  </div>
</template>

<script>
  import InlineSvg from 'vue-inline-svg'
  import LineChart from './parts/Chart'
  import Editor from './parts/WorkoutBuilder'
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
        Editor,
        InlineSvg
    },
    data() {
      return {
        title: 'Go on...try before you buy!',
        featuresTitle: 'What\'s included?',
        features: [
          {id: 1, subtitle: 'Save Time', desc: 'Create a new long-term bespoke programme in less than 15 minutes.', icon: reduceTime},
          {id: 2, subtitle: 'Workout Builder', desc: 'A powerful workout design tool using free-form text editors. Write anything you want.', icon: powerful},
          {id: 3, subtitle: 'Visuals', desc: 'Analyse and visualise the programme without spending your day entering numbers into boxes. We\'ll handle that.', icon: visualGrid},
          {id: 4, subtitle: 'Cloud', desc: 'It\'s all on the internet. Access anytime and anywhere.', icon: cloud},
          {id: 5, subtitle: 'Easy Planning', desc: 'Copy the workouts across a set time-frame with one-click. Then make any changes required for progression.', icon: easyPlanning},
          {id: 6, subtitle: 'Sleek and Minimal UI', desc: 'Minimal and easy to understand. Simplicity goes a long way.', icon: sleek},
          {id: 7, subtitle: 'Super Affordable', desc: 'No complicated pricing plans with different restrictions. Just pay and get instant access.', icon: cheap},
          {id: 8, subtitle: 'Unlimited Clients', desc: 'There is no limit on the number of clients you can have. Go out there and get more.', icon: noLimits},
          {id: 9, subtitle: 'In-Session Toolkit', desc: 'Ready-to-use calculators to help you deliver an outstanding session.', icon: toolkit},
          {id: 10, subtitle: 'Connect, Learn and Grow', desc: 'Access resources and materials to boost your career by staying up-to-date with the industry. Have a say in our development as well.', icon: learn}
        ],
      }
    }
  }
</script>

<style scoped>
  h2, .container--intro p {
    margin: 1.5rem 0
  }
  .container--2c {
    display: flex
  }
  .container--2c > div {
    margin: auto 3rem
  }
  .container--2c p {
    margin: 1.5rem 0
  }
  #chart--line {
    grid-area: b;
    max-width: 1000px
  }
  .container--features {
    display: grid;
    grid-template-columns: .4fr 1fr;
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