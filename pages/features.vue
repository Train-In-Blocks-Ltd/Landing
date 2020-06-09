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

  /* Workout */
  .wrapper--workout {
    width: 600px;
    height: fit-content;
    background-color: #F4F4F4;
    transition: all 1s cubic-bezier(.165, .84, .44, 1)
  }
  .workouts--workout {
    margin: 0;
    padding: 1rem
  }
  .workouts--workout p {
    margin: 0
  }
  .text--date {
    font-size: .8rem
  }
  .bottom-bar {
    padding: .6rem 1rem
  }
  .bottom-bar .button {
    margin: 0
  }

  /* Workout state */
  .show-workout {
    padding: 0 15px;
    max-height: 314px;
    color: #282828;
    overflow-y: auto;
    font-size: .8rem
  }
  .show-workout h2 {
    font-size: 1.5rem
  }
  .show-workout p, .show-workout ul, .show-workout ol {
    text-decoration: none;
    margin: 0;
    padding: 0
  }
  .activeWorkout {
    background-color: white;
    box-shadow: 0 0 20px 10px #28282810
  }

  /* Chart */
  .container--demo {
    display: grid;
    grid-template-areas: 'a b'
  }
  #chart {
    grid-area: b;
    position: relative;
    margin: auto;
    width: 40vw
  }
  #stats {
    grid-area: a
  }
  #stats h2 {
    margin-top: 0
  }
  #dataName, #dataType {
    outline-width: 0
  }
  .container--desc-data {
    margin: 2rem 0
  }

  /* Other */
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
  .button--save {
    padding: .4rem 1rem
  }

  @supports (-webkit-touch-callout: none) {
    .container--demo, .container--2c {
      display: none
    }
  }
  @media (max-width: 992px) {
    .container--2c {
      grid-template-columns: 300px 1fr
    }
    .container--2c > div {
      margin: auto 1rem
    }
    .wrapper--workout {
      width: 400px
    }
    #editor {
      margin: auto 0
    }
  }
  @media (max-width: 768px) {
    .container--2c {
      flex-direction: column-reverse
    }
    .container--2c > div {
      margin: auto
    }
    #text {
      margin: 2rem 0
    }
  }
  @media (max-width: 576px) {
    .container--demo {
      margin: 4rem 0;
      grid-template-areas:
        'a'
        'b'
    }
    .container--features {
      margin: 0 0 2rem 0
    }
    .wrapper--workout {
      width: 300px
    }
    #chart {
      margin: 0;
      width: 70vw
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

<template>
  <div>
    <h1 class="paper--title">
      {{ title }}
    </h1>
    <div class="container--2c">
      <div class="wrapper--workout" :class="{activeWorkout: editWorkout}">
        <div class="workouts--workout">
          <p><b>Workout 5</b></p>
          <p class="text--date">
            SAT 01.08.2020
          </p>
        </div>
        <quill v-show="editWorkout" v-model="exampleWorkout" output="html" class="quill" :config="config" />
        <div v-show="!editWorkout" v-html="exampleWorkout" class="show-workout"/>
        <div class="bottom-bar">
          <button v-show="editWorkout" class="button--save" @click="scan(), toggleEdit()">
            Save
          </button>
          <button v-show="!editWorkout" class="button--save" @click="toggleEdit()">
            Edit
          </button>
        </div>
      </div>
      <div id="text">
        <p><b>How do we track performance? Spreadsheets right?</b></p>
        <p>No.</p>
        <p><b>Say goodbye to manually tracking data.</b></p>
        <p>Our app will understand the workouts and will do all the math for you. That's right. You build, visualise, adjust and adapt even before the first session.</p>
      </div>
    </div>
    <div class="spacer" />
    <div class="container--demo">
      <line-chart id="chart" :chart-data="dataCollection" :options="options" />
      <div id="stats">
        <h2 class="sub-title">Statistics</h2>
        <select id="dataName" @change="selection()" />
        <select v-show="showType" id="dataType" @change="selection()">
          <option>Sets</option>
          <option>Reps</option>
          <option>Load</option>
          <option>Volume</option>
        </select>
        <div v-show="showType" class="container--desc-data">
          <p id="p1" />
          <p id="p2" /><br>
          <p id="p3" />
          <p id="p4" />
          <p id="p5" />
        </div>
      </div>
    </div>
    <div class="spacer" />
    <h1 class="main-title">{{ featuresTitle }}</h1><br>
    <div v-for="feature in features" :key="feature.id" class="container--features">
      <inline-svg class="icon" :src="feature.icon" />
      <div>
        <h2 class="sub-title">{{ feature.subtitle }}</h2>
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
      title: 'Try before you buy!',
      featuresTitle: 'What are the benefits?',
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
      config: {
        placeholder: 'Get programming...',
        modules: {
          toolbar: [
            [{ header: 1 }, { header: 2 }],
            ['bold', 'italic', 'underline', { script: 'sub' }, { script: 'super' }],
            [{ list: 'ordered' }, { list: 'bullet' }],
            [{ indent: '-1' }, { indent: '+1' }],
            ['link'],
            ['clean']
          ]
        }
      },
      exampleWorkout: '<h1><strong>How to use</strong></h1><p><br></p><p>Anything contained in the <strong>square brackets</strong> are automatically <strong>tracked</strong>!!</p><p><br></p><p>Format:</p><p>-------------</p><p><em>Exercise Name</em><strong>:</strong> <em>Sets</em> <strong>x</strong> <em>Reps</em> <strong>at</strong> <em>Load</em></p><p><em>Others</em><strong>:</strong> <em>Measurement</em></p><p><br></p><p><strong>(You must separate the name and the measurement with a colon)</strong></p><p><br></p><p><strong>Example Workout Below</strong></p><p>======================</p><h2><strong>Warm-Up</strong></h2><p><br></p><p>A [Treadmill: 10 min]</p><ul><li>Stay light and slowly build up the intensity.</li></ul><p><br></p><p>B [Rower: 1500m]</p><ul><li>Legs, arms, arms then legs</li><li>This is a steady-state exercise</li><li>Remember to warm-up and stretch</li></ul><p><br></p><h2><strong>Main resistance</strong></h2><p><br></p><p>A [Bench Press: 3x6 at 37.5/40/47.5kg]</p><p><br></p><p>B [Incline Dumbbell Press: 2x12/10 at 18/20kg]</p><p><br></p><p>C [Decline Dumbbell Press: 2x12 at 18/20kg]</p><p><br></p><h2><strong>Cooldown</strong></h2><p><br></p><p>A) Foam Roll and Stretch: 10 min</p><ul><li>You\'ve done the work, now relax</li><li>Take your time and make sure you foam roll slowly and belly-breathe.</li></ul><p>B) Walk it off</p><p><br></p><h2><strong>Other Measures</strong></h2><p><br></p><p>[s-RPE (CR10): 8]</p><p>[Weight (kg): 57.3]</p><p>[Hydration (%): 57]</p><p>[CMJ Test (cm): 43.2]</p>',
      exampleWorkoutStore: [
        '<h1><strong>How to use</strong></h1><p><br></p><p>Anything contained in the <strong>square brackets</strong> are automatically <strong>tracked</strong>!!</p><p><br></p><p>Format:</p><p>-------------</p><p><em>Exercise Name</em><strong>:</strong> <em>Sets</em> <strong>x</strong> <em>Reps</em> <strong>at</strong> <em>Load</em></p><p><em>Others</em><strong>:</strong> <em>Measurement</em></p><p><br></p><p><strong>(You must separate the name and the measurement with a colon)</strong></p><p><br></p><p><strong>Example Workout Below</strong></p><p>======================</p><h2><strong>Warm-Up</strong></h2><p><br></p><p>A [Treadmill: 6 min]</p><ul><li>Stay light and slowly build up the intensity.</li></ul><p><br></p><p>B [Rower: 1000m]</p><ul><li>Legs, arms, arms then legs</li><li>This is a steady-state exercise</li><li>Remember to warm-up and stretch</li></ul><p><br></p><h2><strong>Main resistance</strong></h2><p><br></p><p>A [Bench Press: 2x14 at 30/35/40kg]</p><p><br></p><p>B [Incline Dumbbell Press: 2x14/12 at 16/16kg]</p><p><br></p><p>C [Decline Dumbbell Press: 2x10/8 at 12/14kg]</p><p><br></p><h2><strong>Cooldown</strong></h2><p><br></p><p>A) Foam Roll and Stretch: 10 min</p><ul><li>You\'ve done the work, now relax</li><li>Take your time and make sure you foam roll slowly and belly-breathe.</li></ul><p>B) Walk it off</p><p><br></p><h2><strong>Other Measures</strong></h2><p><br></p><p>[s-RPE (CR10): 6]</p><p>[Weight (kg): 56.2]</p><p>[Hydration (%): 56]</p><p>[CMJ Test (cm): 40]</p>',
        '<h1><strong>How to use</strong></h1><p><br></p><p>Anything contained in the <strong>square brackets</strong> are automatically <strong>tracked</strong>!!</p><p><br></p><p>Format:</p><p>-------------</p><p><em>Exercise Name</em><strong>:</strong> <em>Sets</em> <strong>x</strong> <em>Reps</em> <strong>at</strong> <em>Load</em></p><p><em>Others</em><strong>:</strong> <em>Measurement</em></p><p><br></p><p><strong>(You must separate the name and the measurement with a colon)</strong></p><p><br></p><p><strong>Example Workout Below</strong></p><p>======================</p><h2><strong>Warm-Up</strong></h2><p><br></p><p>A [Treadmill: 6 min]</p><ul><li>Stay light and slowly build up the intensity.</li></ul><p><br></p><p>B [Rower: 1200m]</p><ul><li>Legs, arms, arms then legs</li><li>This is a steady-state exercise</li><li>Remember to warm-up and stretch</li></ul><p><br></p><h2><strong>Main resistance</strong></h2><p><br></p><p>A [Bench Press: 2x12 at 35/40/42.5kg]</p><p><br></p><p>B [Incline Dumbbell Press: 2x14 at 16/18kg]</p><p><br></p><p>C [Decline Dumbbell Press: 2x10 at 14/14kg]</p><p><br></p><h2><strong>Cooldown</strong></h2><p><br></p><p>A) Foam Roll and Stretch: 10 min</p><ul><li>You\'ve done the work, now relax</li><li>Take your time and make sure you foam roll slowly and belly-breathe.</li></ul><p>B) Walk it off</p><p><br></p><h2><strong>Other Measures</strong></h2><p><br></p><p>[s-RPE (CR10): 7]</p><p>[Weight (kg): 55.1]</p><p>[Hydration (%): 54]</p><p>[CMJ Test (cm): 41.5]</p>',
        '<h1><strong>How to use</strong></h1><p><br></p><p>Anything contained in the <strong>square brackets</strong> are automatically <strong>tracked</strong>!!</p><p><br></p><p>Format:</p><p>-------------</p><p><em>Exercise Name</em><strong>:</strong> <em>Sets</em> <strong>x</strong> <em>Reps</em> <strong>at</strong> <em>Load</em></p><p><em>Others</em><strong>:</strong> <em>Measurement</em></p><p><br></p><p><strong>(You must separate the name and the measurement with a colon)</strong></p><p><br></p><p><strong>Example Workout Below</strong></p><p>======================</p><h2><strong>Warm-Up</strong></h2><p><br></p><p>A [Treadmill: 8 min]</p><ul><li>Stay light and slowly build up the intensity.</li></ul><p><br></p><p>B [Rower: 1400m]</p><ul><li>Legs, arms, arms then legs</li><li>This is a steady-state exercise</li><li>Remember to warm-up and stretch</li></ul><p><br></p><h2><strong>Main resistance</strong></h2><p><br></p><p>A [Bench Press: 2x10 at 40/42.5/42.5kg]</p><p><br></p><p>B [Incline Dumbbell Press: 2x12 at 18/16kg]</p><p><br></p><p>C [Decline Dumbbell Press: 2x10/12 at 14/16kg]</p><p><br></p><h2><strong>Cooldown</strong></h2><p><br></p><p>A) Foam Roll and Stretch: 10 min</p><ul><li>You\'ve done the work, now relax</li><li>Take your time and make sure you foam roll slowly and belly-breathe.</li></ul><p>B) Walk it off</p><p><br></p><h2><strong>Other Measures</strong></h2><p><br></p><p>[s-RPE (CR10): 8]</p><p>[Weight (kg): 55.2]</p><p>[Hydration (%): 61]</p><p>[CMJ Test (cm): 43.5]</p>',
        '<h1><strong>How to use</strong></h1><p><br></p><p>Anything contained in the <strong>square brackets</strong> are automatically <strong>tracked</strong>!!</p><p><br></p><p>Format:</p><p>-------------</p><p><em>Exercise Name</em><strong>:</strong> <em>Sets</em> <strong>x</strong> <em>Reps</em> <strong>at</strong> <em>Load</em></p><p><em>Others</em><strong>:</strong> <em>Measurement</em></p><p><br></p><p><strong>(You must separate the name and the measurement with a colon)</strong></p><p><br></p><p><strong>Example Workout Below</strong></p><p>======================</p><h2><strong>Warm-Up</strong></h2><p><br></p><p>A [Treadmill: 10 min]</p><ul><li>Stay light and slowly build up the intensity.</li></ul><p><br></p><p>B [Rower: 1300m]</p><ul><li>Legs, arms, arms then legs</li><li>This is a steady-state exercise</li><li>Remember to warm-up and stretch</li></ul><p><br></p><h2><strong>Main resistance</strong></h2><p><br></p><p>A [Bench Press: 3x8 at 40/40/45kg]</p><p><br></p><p>B [Incline Dumbbell Press: 2x12 at 16/16kg]</p><p><br></p><p>C [Decline Dumbbell Press: 2x10 at 16/18kg]</p><p><br></p><h2><strong>Cooldown</strong></h2><p><br></p><p>A) Foam Roll and Stretch: 10 min</p><ul><li>You\'ve done the work, now relax</li><li>Take your time and make sure you foam roll slowly and belly-breathe.</li></ul><p>B) Walk it off</p><p><br></p><h2><strong>Other Measures</strong></h2><p><br></p><p>[s-RPE (CR10): 7]</p><p>[Weight (kg): 56.7]</p><p>[Hydration (%): 59]</p><p>[CMJ Test (cm): 44.2]</p>'
      ],
      showType: true,
      dataPacketStore: [],
      regexExtract: /(?<=\[)(.*?)\s*:\s*(.*?)(?=\])/gi,
      regexSetsReps: /(\d*)x((\d*\/*)*)/gi,
      regexLoadCapture: /(at|@)(.+)/gi,
      regexNumberBreakdown: /[0-9.]+/gi,
      dataCollection: null,
      options: null,
      yData: [],
      xLabel: [],
      editWorkout: false
    }
  },
  head () {
    return {
      title: 'Powerful Features Made Simple',
      meta: [
        { hid: 'description', name: 'description', content: 'It\'s time for personal trainers to track their client\'s performance like it\'s 2020. Say goodbye to spreadsheets.' },
        { hid: 'og:title', content: 'Powerful Features Made Simple' },
        { hid: 'twitter:title', content: 'Powerful Features Made Simple' },
        { hid: 'og:url', content: '/features' }
      ]
    }
  },
  mounted () {
    this.scan()
  },
  methods: {
    toggleEdit () {
      this.editWorkout = !this.editWorkout
    },

    // CHART METHODS //
    fillData () {
      this.dataCollection = {
        labels: this.xLabel,
        datasets: [
          {
            label: 'Data Point',
            borderColor: '#282828',
            backgroundColor: 'transparent',
            data: this.yData
          }
        ]
      }
      this.options = {
        legend: {
          display: false
        },
        chartOptions: {
          responsive: true,
          maintainAspectRatio: false
        },
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: false
            }
          }]
        }
      }
    },
    // This is called at the start and after @change. It scans the current values selected and fills the chart.
    selection () {
      this.showType = true
      this.yData.length = 0
      this.xLabel.length = 0
      this.exampleWorkoutStore = [
        '<p><b>WORKOUT 1</b></p><p>Warm-Up</p><p>A) Treadmill: 10 min</p><p>- Take it light and easy.</p><p>Main CV</p><p>B) Rower: 1500m</p><p>- Back straight</p><p>- Legs, arms, and legs</p><p>- Push hard!!</p><p>Main resistance</p><p>A) [Bench press: 2x20 at 40/45kg]</p><p>A2) [Bench press: 2x30 at 50/60kg]</p><p>B) [Incline Dumbbell Press: 2x18 at 14/16kg]</p><p>C) [Decline Dumbbell Press: 2x16 at 12/14kg]</p><p>Cooldown</p><p>A) Foam Roll and Stretch: 10 min</p><p>- Whole-body, do as much as you can</p><p>[s-RPE (CR10): 5]</p><p>[Weight: 55kg]</p>',
        '<p><b>WORKOUT 2</b></p><p>Warm-Up</p><p>A) Treadmill: 10 min</p><p>- Take it light and easy.</p><p>Main CV</p><p>B) Rower: 1500m</p><p>- Back straight</p><p>- Legs, arms, and legs</p><p>- Push hard!!</p><p>Main resistance</p><p>A) [bench Press: 2x15 at 50/60kg]</p><p>B) [Incline Dumbbell Press: 2x12 at 14/16kg]</p><p>C) [Decline Dumbbell Press: 2x10 at 18/18kg]</p><p>Cooldown</p><p>A) Foam Roll and Stretch: 10 min</p><p>- Whole-body, do as much as you can</p><p>[s-RPE (CR10): 6]</p><p>[Weight: 55.8kg]</p>',
        '<p><b>WORKOUT 3</b></p><p>Warm-Up</p><p>A) Treadmill: 10 min</p><p>- Take it light and easy.</p><p>Main CV</p><p>B) Rower: 1500m</p><p>- Back straight</p><p>- Legs, arms, and legs</p><p>- Push hard!!</p><p>Main resistance</p><p>A) [bench Press: 3x10 at 40/47.5/50kg]</p><p>B) [Incline Dumbbell Press: 3x12/40/5 at 16/18/20kg]</p><p>C) [Decline Dumbbell Press: 2x10 at 16/18/20kg]</p><p>Cooldown</p><p>A) Foam Roll and Stretch: 10 min</p><p>- Whole-body, do as much as you can</p><p>[s-RPE (CR10): 6]</p><p>[Weight: 56kg]</p>',
        '<p><b>WORKOUT 4</b></p><p>Warm-Up</p><p>A) Treadmill: 10 min</p><p>- Take it light and easy.</p><p>Main CV</p><p>B) Rower: 1500m</p><p>- Back straight</p><p>- Legs, arms, and legs</p><p>- Push hard!!</p><p>Main resistance</p><p>A) [bench press: 3x6 at 50/60/62.5kg]</p><p>B) [Incline Dumbbell Press: 3x8 at 20/20/22kg]</p><p>C) [Decline Dumbbell Press: 3x10 at 18/20/24kg]</p><p>Cooldown</p><p>A) Foam Roll and Stretch: 10 min</p><p>- Whole-body, do as much as you can</p><p>[s-RPE (CR10): 8]</p><p>[Weight: 56.2kg]</p>'
      ]
      const dataForName = document.getElementById('dataName').value
      const dataForType = document.getElementById('dataType').value
      let dataForSum = 0
      const overviewStore = []
      this.dataPacketStore.forEach((item) => {
        overviewStore.length = 0
        item.forEach((exerciseDataPacket) => {
          const tidyA = dataForName.replace(/\(/g, '\\(')
          const tidyB = tidyA.replace(/\)/g, '\\)')
          const regex = RegExp(tidyB, 'gi')
          const protocol = exerciseDataPacket[1].replace(/\s/g, '')
          if (regex.test(exerciseDataPacket[0]) === true) {
            if ((dataForType === 'Sets' || dataForType === 'Reps') && exerciseDataPacket[1].includes('at') === true) {
              this.yData.push(this.setsReps(protocol, dataForType))
            }
            if (dataForType === 'Load' && exerciseDataPacket[1].includes('at') === true) {
              this.yData.push(this.load(protocol))
            }
            if (dataForType === 'Volume' && exerciseDataPacket[1].includes('at') === true) {
              const agg = this.setsReps(protocol, 'Reps') * this.load(protocol)
              this.yData.push(agg)
            }
            if (exerciseDataPacket[1].includes('at') !== true) {
              this.showType = false
              this.yData.push(this.otherMeasures(protocol))
            }
          }
          if (dataForName === 'Block Overview' && exerciseDataPacket[1].includes('at') === true) {
            if (dataForType === 'Sets' || dataForType === 'Reps') {
              dataForSum = this.setsReps(protocol, dataForType)
            }
            if (dataForType === 'Load') {
              dataForSum = this.load(protocol)
            }
            if (dataForType === 'Volume') {
              dataForSum = this.setsReps(protocol, 'Reps') * this.load(protocol)
            }
            overviewStore.push(dataForSum)
          }
        })
        if (dataForName === 'Block Overview' && overviewStore.length !== 0) {
          this.yData.push(overviewStore.reduce((a, b) => a + b))
        }
      })
      let x = 1
      for (; x <= this.yData.length; x++) {
        this.xLabel.push(x)
      }
      this.descStats(dataForType)
      this.fillData()
    },
    // INIT METHODS //
    scan () {
      this.dataPacketStore.length = 0
      this.exampleWorkoutStore.push(this.exampleWorkout)
      // Pulls and creates nested arrays. dataPacketStore > workoutDataPackets > exerciseDataPackets
      this.exampleWorkoutStore.forEach((object) => {
        if (object !== null) {
          const pulledProtocols = this.pullProtocols(object)
          this.dataPacketStore.push(this.chunkArray(pulledProtocols))
        }
      })
      // Appends the options to the select
      this.dropdownInit()
      this.selection()
    },
    // Extracts the protocols and measures and stores it all into a temporary array
    pullProtocols (text) {
      const textNoHTML = text.replace(/<[^>]*>?/gm, '')
      const tempStore = []
      let m
      while ((m = this.regexExtract.exec(textNoHTML)) !== null) {
        if (m.index === this.regexExtract.lastIndex) {
          this.regexExtract.lastIndex++
        }
        m.forEach((match, groupIndex) => {
          if (groupIndex === 1 || groupIndex === 2) {
            tempStore.push(match)
          }
        })
      }
      return tempStore
    },
    // Breaks down the temporary array into data packets of length 2
    // Data Packet format: ['NAME', 'PROTOCOL/MEASURE/NUMBERS']
    chunkArray (myArray) {
      let index = 0
      const tempArray = []
      for (index = 0; index < myArray.length; index += 2) {
        const dataPacket = myArray.slice(index, index + 2)
        tempArray.push(dataPacket)
      }
      return tempArray
    },
    // Init the dropdown selection with validation
    dropdownInit () {
      const dropdownEl = document.getElementById('dataName')
      dropdownEl.innerHTML = '<option>Block Overview</option>'
      const tempItemStore = []
      const tempItemStoreLate = []
      this.dataPacketStore.forEach((item) => {
        item.forEach((exerciseDataPacket) => {
          const tidyA = exerciseDataPacket[0].replace(/\(/g, '\\(')
          const tidyB = tidyA.replace(/\)/g, '\\)')
          const regexA = RegExp(tidyB, 'gi')
          const regexB = RegExp(/[|\\/)(~^:,;?!&%$@*+]/, 'g')
          const itemCased = this.properCase(exerciseDataPacket[0])
          if (regexA.test(tempItemStore) !== true && exerciseDataPacket[1].includes('at') === true) {
            tempItemStore.push(itemCased)
          }
          if (regexA.test(tempItemStoreLate) !== true && exerciseDataPacket[1].includes('at') !== true) {
            if (regexB.test(exerciseDataPacket[0]) === true) {
              tempItemStoreLate.push(exerciseDataPacket[0])
            } else {
              tempItemStoreLate.push(itemCased)
            }
          }
        })
      })
      tempItemStore.forEach((item) => {
        const option = document.createElement('option')
        option.text = item
        dropdownEl.add(option)
      })
      tempItemStoreLate.forEach((item) => {
        const option = document.createElement('option')
        option.text = item
        dropdownEl.add(option)
      })
    },
    // Creates proper casing, works in conjuction with dropdownAppend to validate if exercise is already in the list.
    properCase (string) {
      const sentence = string.toLowerCase().split(' ')
      for (let i = 0; i < sentence.length; i++) {
        sentence[i] = sentence[i][0].toUpperCase() + sentence[i].slice(1)
      }
      return sentence.join(' ')
    },
    // REGEX METHODS //
    // Extracts anything for Sets and Reps
    setsReps (protocol, dataForType) {
      let setStore = null
      let extractedSetsReps = null
      const tempSetsRepsStore = []
      let m
      while ((m = this.regexSetsReps.exec(protocol)) !== null) {
        if (m.index === this.regexSetsReps.lastIndex) {
          this.regexSetsReps.lastIndex++
        }
        m.forEach((match, groupIndex) => {
          if (groupIndex === 1) {
            setStore = parseInt(match)
          }
          if (dataForType === 'Sets' && groupIndex === 1) {
            extractedSetsReps = parseInt(match)
          }
          if (dataForType === 'Reps' && groupIndex === 2) {
            if (match.includes('/') === true) {
              let n
              while ((n = this.regexNumberBreakdown.exec(match)) !== null) {
                if (n.index === this.regexNumberBreakdown.lastIndex) {
                  this.regexNumberBreakdown.lastIndex++
                }
                n.forEach((repsMatchExact) => {
                  tempSetsRepsStore.push(parseInt(repsMatchExact))
                })
              }
              extractedSetsReps = tempSetsRepsStore.reduce((a, b) => a + b)
            } else {
              extractedSetsReps = parseInt(match) * parseInt(setStore)
            }
          }
        })
      }
      return extractedSetsReps
    },
    // Extracts anything for Loads
    load (protocol) {
      const tempLoadStore = []
      let m
      while ((m = this.regexLoadCapture.exec(protocol)) !== null) {
        if (m.index === this.regexLoadCapture.lastIndex) {
          this.regexLoadCapture.lastIndex++
        }
        m.forEach((loadMatch, groupIndex) => {
          if (groupIndex === 2) {
            let n
            while ((n = this.regexNumberBreakdown.exec(loadMatch)) !== null) {
              if (n.index === this.regexNumberBreakdown.lastIndex) {
                this.regexNumberBreakdown.lastIndex++
              }
              n.forEach((loadMatchExact) => {
                tempLoadStore.push(parseFloat(loadMatchExact))
              })
            }
          }
        })
      }
      const sum = tempLoadStore.reduce((a, b) => a + b)
      return sum
    },
    // Extracts any other measures
    otherMeasures (protocol) {
      let data = 0
      let m
      while ((m = this.regexNumberBreakdown.exec(protocol)) !== null) {
        if (m.index === this.regexNumberBreakdown.lastIndex) {
          this.regexNumberBreakdown.lastIndex++
        }
        m.forEach((match) => {
          data = parseFloat(match)
        })
      }
      return data
    },
    descStats (dataForType) {
      let storeMax = 0
      let store = 0
      const sum = this.yData.reduce((a, b) => a + b)
      // Sets descriptive data with its corresponding info.
      document.getElementById('p1').innerHTML = '<b>Total' + ' ' + dataForType + ':</b> ' + sum
      document.getElementById('p2').innerHTML = '<b>Average' + ' ' + dataForType + ':</b> ' + (sum / this.yData.length).toFixed(1)
      this.yData.forEach((value) => {
        storeMax = Math.max(storeMax, value)
      })
      document.getElementById('p3').innerHTML = '<b>Maximum' + ' ' + dataForType + ':</b> ' + storeMax
      store = storeMax
      this.yData.forEach((value) => {
        store = Math.min(store, value)
      })
      document.getElementById('p4').innerHTML = '<b>Minimum' + ' ' + dataForType + ':</b> ' + store
      document.getElementById('p5').innerHTML = 'Percentage Change: ' + (((storeMax / store) - 1) * 100).toFixed(1) + '%'
    },
    head () {
      return {
        title: 'Faster Exercise Programming',
        meta: [
          { hid: 'description', name: 'description', content: 'Say goodbye to spreadsheets. They\'ve served us well but we\'ve found a better way of tracking client data.' },
          { hid: 'og:title', content: 'Demo' },
          { hid: 'twitter:title', content: 'Demo' },
          { hid: 'og:url', content: '/features' }
        ]
      }
    }
  }
}
</script>
