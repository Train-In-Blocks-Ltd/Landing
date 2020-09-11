<style scoped>
  h2, .container--intro p {
    margin: 1.5rem 0
  }
  .section--workouts {
    display: grid;
    grid-gap: 2rem
  }
  .section--workouts p {
    margin: 1.5rem 0
  }
  .icon--expand {
    cursor: pointer;
    vertical-align: middle;
    margin-right: .2rem;
    transition: all .6s
  }
  .expanded {
    transform: rotate(180deg)
  }

  /* Workout */
  .text--scroll {
    display: grid;
    grid-template-columns: 240px 24px
  }
  .text--scroll p {
    margin: auto
  }
  .text--scroll svg {
    margin: auto
  }
  .container--workouts {
    display: grid;
    grid-gap: 2rem
  }
  .workout--header {
    display: flex;
    justify-content: space-between;
    margin: 0;
    padding-bottom: 2rem
  }
  .workout--header p {
    margin: 0
  }
  .text--date {
    font-size: .8rem
  }
  .bottom-bar {
    height: 60px
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
    font-size: 1.6rem
  }
  .container--desc-data {
    margin: 2rem 0
  }
  .container--desc-data p {
    margin: 1rem 0
  }
  .wrapper--data {
    display: grid;
    grid-gap: 1rem;
    margin-bottom: 2rem
  }
  .data-desc__value {
    margin: .4rem 0 2rem 0;
    font-size: 1.6rem;
    font-weight: bold
  }

  /* Other */
  .container--features {
    display: grid;
    grid-template-columns: .4fr 1fr;
    width: 100%;
    margin: 2rem 0 6rem 0
  }
  .container--features > div > p {
    width: 80%;
    margin: 1rem 0
  }
  .icon {
    margin: auto;
    text-align: center
  }

  @media (max-width: 768px) {
    #chart {
      margin: 0;
      width: 70vw
    }
    #text {
      margin: 2rem 0
    }
  }
  @media (max-width: 576px) {
    #dataName, #dataType {
      width: 100%
    }
    .container--features {
      margin: 0 0 2rem 0
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
    <div class="section--workouts">
      <div id="text">
        <p><b>How do we track performance? Spreadsheets right?</b></p>
        <p>No.</p>
        <p><b>Say goodbye to manually tracking data.</b></p>
        <p>Our app will understand the workouts and will do all the math for you. That's right. You build, visualise, adjust and adapt even before the first session.</p>
      </div>
      <div class="container--workouts">
        <div v-for="exampleWorkout in exampleWorkoutStore" :key="exampleWorkout.id" class="wrapper--workout">
          <div class="workout--header">
            <div>
              <p><b>Workout {{ exampleWorkout.id }}</b></p>
              <p class="text--date">
                {{ exampleWorkout.date }}
              </p>
            </div>
            <inline-svg @click="toggleExpandedSessions(exampleWorkout.id)" :class="{expanded: expandedSessions.includes(exampleWorkout.id)}" class="icon--expand" :src="require('../assets/svg/expand.svg')" />
          </div>
          <quill v-if="currentID === exampleWorkout.id && expandedSessions.includes(exampleWorkout.id)" v-model="exampleWorkout.content" output="html" class="quill" :config="config" />
          <!--eslint-disable-next-line-->
          <div v-if="currentID !== exampleWorkout.id && expandedSessions.includes(exampleWorkout.id)" class="show-workout" v-html="exampleWorkout.content" />
          <div v-if="expandedSessions.includes(exampleWorkout.id)" class="bottom-bar">
            <button v-if="currentID === exampleWorkout.id" @click="scan()">
              Save
            </button>
            <button v-if="currentID !== exampleWorkout.id && currentID === null" @click="toggleEdit(exampleWorkout.id)">
              Edit
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="spacer" />
    <div class="container--demo">
      <line-chart id="chart" :chart-data="dataCollection" :options="options" />
      <div id="stats">
        <h2 class="sub-title">
          Statistics
        </h2>
        <div class="wrapper--data">
          <label for="dataName"><b>Measurement:</b></label>
          <select id="dataName" v-model="selectedDataName" name="dataName" @change="selection()">
            <option v-for="option in optionsForDataName" :key="option.id" :value="option.value">
              {{ option.text }}
            </option>
          </select>
        </div>
        <div v-show="showType" class="wrapper--data">
          <label for="dataType"><b>Data Type:</b></label>
          <select id="dataType" v-model="selectedDataType" name="dataType" @change="selection()">
            <option value="Sets">
              Sets
            </option>
            <option value="Reps">
              Reps
            </option>
            <option value="Load">
              Load
            </option>
            <option value="Volume">
              Volume
            </option>
          </select>
        </div>
        <div v-show="showType" class="container--desc-data">
          <div class="container--data-desc">
            <p class="data-desc__desc">
              <b>{{ p1.desc }}</b>
            </p>
            <p class="data-desc__value">
              {{ p1.value }}
            </p>
          </div>
          <div class="container--data-desc">
            <p class="data-desc__desc">
              <b>{{ p2.desc }}</b>
            </p>
            <p class="data-desc__value">
              {{ p2.value }}
            </p>
          </div>
          <div class="container--data-desc">
            <p class="data-desc__desc">
              <b>{{ p3.desc }}</b>
            </p>
            <p class="data-desc__value">
              {{ p3.value }}
            </p>
          </div>
          <div class="container--data-desc">
            <p class="data-desc__desc">
              <b>{{ p4.desc }}</b>
            </p>
            <p class="data-desc__value">
              {{ p4.value }}
            </p>
          </div>
          <div class="container--data-desc">
            <p class="data-desc__desc">
              {{ p5.desc }}
            </p>
            <p class="data-desc__value">
              {{ p5.value }}
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="spacer" />
    <h1 class="main-title">
      {{ featuresTitle }}
    </h1><br>
    <div v-for="feature in features" :key="feature.id" class="container--features">
      <inline-svg class="icon" :src="feature.icon" />
      <div>
        <h2 class="sub-title">
          {{ feature.subtitle }}
        </h2>
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
      expandedSessions: [],
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
          clipboard: {
            matchVisual: false
          },
          toolbar: [
            [{ header: 1 }, { header: 2 }, 'bold', 'italic', 'underline', { script: 'sub' }, { script: 'super' }, { list: 'ordered' }, { list: 'bullet' }, 'link']
          ]
        }
      },
      exampleWorkoutStore: [
        { id: 1, date: 'SAT 01.08.2020', content: '<h1><strong>How to use</strong></h1><p><br></p><p>Anything contained in the <strong>square brackets</strong> are automatically <strong>tracked</strong>!!</p><p><br></p><p><b>Format:</b></p><p>-------------</p><p><em>Exercise Name</em><strong>:</strong> <em>Sets</em> <strong>x</strong> <em>Reps</em> <strong>at</strong> <em>Load</em></p><p><em>Other Measures</em><strong>:</strong> <em>Values</em></p><p><br></p><p><strong>(You must separate the name and the measurement with a colon)</strong></p><p><br></p><p><strong>Example Workout Below</strong></p><p>======================</p><h2><strong>Warm-Up</strong></h2><p><br></p><p>A [Treadmill: 6 min]</p><ul><li>Stay light and slowly build up the intensity.</li></ul><p><br></p><p>B [Rower: 1000m]</p><ul><li>Legs, arms, arms then legs</li><li>This is a steady-state exercise</li><li>Remember to warm-up and stretch</li></ul><p><br></p><h2><strong>Main resistance</strong></h2><p><br></p><p>A [Bench Press: 2x14 at 30/35/40kg]</p><p><br></p><p>B [Incline Dumbbell Press: 2x14/12 at 16/16kg]</p><p><br></p><p>C [Decline Dumbbell Press: 2x10/8 at 12/14kg]</p><p><br></p><h2><strong>Cooldown</strong></h2><p><br></p><p>A) Foam Roll and Stretch: 10 min</p><ul><li>You\'ve done the work, now relax</li><li>Take your time and make sure you foam roll slowly and belly-breathe.</li></ul><p>B) Walk it off</p><p><br></p><h2><strong>Other Measures</strong></h2><p><br></p><p>[s-RPE (CR10): 6]</p><p>[Weight (kg): 56.2]</p><p>[Hydration (%): 56]</p><p>[CMJ Test (cm): 40]</p>' },
        { id: 2, date: 'TUE 04.08.2020', content: '<h2><strong>Warm-Up</strong></h2><p><br></p><p>A [Treadmill: 6 min]</p><ul><li>Stay light and slowly build up the intensity.</li></ul><p><br></p><p>B [Rower: 1200m]</p><ul><li>Legs, arms, arms then legs</li><li>This is a steady-state exercise</li><li>Remember to warm-up and stretch</li></ul><p><br></p><h2><strong>Main resistance</strong></h2><p><br></p><p>A [Bench Press: 2x12 at 35/40/42.5kg]</p><p><br></p><p>B [Incline Dumbbell Press: 2x14 at 16/18kg]</p><p><br></p><p>C [Decline Dumbbell Press: 2x10 at 14/14kg]</p><p><br></p><h2><strong>Cooldown</strong></h2><p><br></p><p>A) Foam Roll and Stretch: 10 min</p><ul><li>You\'ve done the work, now relax</li><li>Take your time and make sure you foam roll slowly and belly-breathe.</li></ul><p>B) Walk it off</p><p><br></p><h2><strong>Other Measures</strong></h2><p><br></p><p>[s-RPE (CR10): 7]</p><p>[Weight (kg): 55.1]</p><p>[Hydration (%): 54]</p><p>[CMJ Test (cm): 41.5]</p>' },
        { id: 3, date: 'WED 05.08.2020', content: '<h2><strong>Warm-Up</strong></h2><p><br></p><p>A [Treadmill: 8 min]</p><ul><li>Stay light and slowly build up the intensity.</li></ul><p><br></p><p>B [Rower: 1400m]</p><ul><li>Legs, arms, arms then legs</li><li>This is a steady-state exercise</li><li>Remember to warm-up and stretch</li></ul><p><br></p><h2><strong>Main resistance</strong></h2><p><br></p><p>A [Bench Press: 2x10 at 40/42.5/42.5kg]</p><p><br></p><p>B [Incline Dumbbell Press: 2x12 at 18/16kg]</p><p><br></p><p>C [Decline Dumbbell Press: 2x10/12 at 14/16kg]</p><p><br></p><h2><strong>Cooldown</strong></h2><p><br></p><p>A) Foam Roll and Stretch: 10 min</p><ul><li>You\'ve done the work, now relax</li><li>Take your time and make sure you foam roll slowly and belly-breathe.</li></ul><p>B) Walk it off</p><p><br></p><h2><strong>Other Measures</strong></h2><p><br></p><p>[s-RPE (CR10): 8]</p><p>[Weight (kg): 55.2]</p><p>[Hydration (%): 61]</p><p>[CMJ Test (cm): 43.5]</p>' },
        { id: 4, date: 'FRI 07.08.2020', content: '<h2><strong>Warm-Up</strong></h2><p><br></p><p>A [Treadmill: 10 min]</p><ul><li>Stay light and slowly build up the intensity.</li></ul><p><br></p><p>B [Rower: 1300m]</p><ul><li>Legs, arms, arms then legs</li><li>This is a steady-state exercise</li><li>Remember to warm-up and stretch</li></ul><p><br></p><h2><strong>Main resistance</strong></h2><p><br></p><p>A [Bench Press: 3x8 at 40/40/45kg]</p><p><br></p><p>B [Incline Dumbbell Press: 2x12 at 16/16kg]</p><p><br></p><p>C [Decline Dumbbell Press: 2x10 at 16/18kg]</p><p><br></p><h2><strong>Cooldown</strong></h2><p><br></p><p>A) Foam Roll and Stretch: 10 min</p><ul><li>You\'ve done the work, now relax</li><li>Take your time and make sure you foam roll slowly and belly-breathe.</li></ul><p>B) Walk it off</p><p><br></p><h2><strong>Other Measures</strong></h2><p><br></p><p>[s-RPE (CR10): 7]</p><p>[Weight (kg): 56.7]</p><p>[Hydration (%): 59]</p><p>[CMJ Test (cm): 44.2]</p>' },
        { id: 5, date: 'SUN 08.08.2020', content: '<h2><strong>Warm-Up</strong></h2><p><br></p><p>A [Treadmill: 10 min]</p><ul><li>Stay light and slowly build up the intensity.</li></ul><p><br></p><p>B [Rower: 1500m]</p><ul><li>Legs, arms, arms then legs</li><li>This is a steady-state exercise</li><li>Remember to warm-up and stretch</li></ul><p><br></p><h2><strong>Main resistance</strong></h2><p><br></p><p>A [Bench Press: 3x6 at 37.5/40/47.5kg]</p><p><br></p><p>B [Incline Dumbbell Press: 2x12/10 at 18/20kg]</p><p><br></p><p>C [Decline Dumbbell Press: 2x12 at 18/20kg]</p><p><br></p><h2><strong>Cooldown</strong></h2><p><br></p><p>A) Foam Roll and Stretch: 10 min</p><ul><li>You\'ve done the work, now relax</li><li>Take your time and make sure you foam roll slowly and belly-breathe.</li></ul><p>B) Walk it off</p><p><br></p><h2><strong>Other Measures</strong></h2><p><br></p><p>[s-RPE (CR10): 8]</p><p>[Weight (kg): 57.3]</p><p>[Hydration (%): 57]</p><p>[CMJ Test (cm): 43.2]</p>' }
      ],
      showType: true,
      dataPacketStore: [],
      regexExtract: /\[\s*(.*?)\s*:\s*(.*?)\]/gi,
      regexSetsReps: /(\d*)x((\d*\/*)*)/gi,
      regexLoadCapture: /(at|@)(.+)/gi,
      regexNumberBreakdown: /[0-9.]+/gi,
      dataCollection: null,
      options: null,
      yData: [],
      xLabel: [],
      p1: '',
      p2: '',
      p3: '',
      p4: '',
      p5: '',
      selectedDataName: 'Block Overview',
      optionsForDataName: [],
      selectedDataType: 'Sets',
      currentID: null
    }
  },
  beforeCreate () {
    this.$parent.$parent.metaHelper.title = 'Faster Exercise Programming'
    this.$parent.$parent.metaHelper.description = 'Say goodbye to spreadsheets. They\'ve served us well but we\'ve found a better way of tracking client data.'
    this.$parent.$parent.metaHelper.url = 'https://traininblocks.com/features/'
  },
  mounted () {
    this.scan()
  },
  methods: {
    toggleExpandedSessions (id) {
      if (this.expandedSessions.includes(id)) {
        const index = this.expandedSessions.indexOf(id)
        if (index > -1) {
          this.expandedSessions.splice(index, 1)
        }
      } else {
        this.expandedSessions.push(id)
      }
    },
    toggleEdit (id) {
      this.currentID = id
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
              suggestedMin: 0,
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
      const dataForName = this.selectedDataName
      const dataForType = this.selectedDataType
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
      this.currentID = null
      this.dataPacketStore.length = 0
      // Pulls and creates nested arrays. dataPacketStore > workoutDataPackets > exerciseDataPackets
      this.exampleWorkoutStore.forEach((object) => {
        if (object.content !== null) {
          const pulledProtocols = this.pullProtocols(object.content)
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
    // Data Packet: ['NAME', 'PROTOCOL/MEASURE/NUMBERS']
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
      this.optionsForDataName = [{ id: 0, text: 'Block Overview', value: 'Block Overview' }]
      const tempItemStore = []
      const tempItemStoreLate = []
      let continueValue = 0
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
      tempItemStore.forEach((item, index) => {
        continueValue = index + 1
        this.optionsForDataName.push({ id: continueValue, text: item, value: item })
      })
      tempItemStoreLate.forEach((item, index) => {
        this.optionsForDataName.push({ id: continueValue + index + 1, text: item, value: item })
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
      let sum = 0
      let isMultiple = false
      const sets = this.setsReps(protocol, 'Sets')
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
                if (loadMatch.includes('/') === true) {
                  tempLoadStore.push(parseFloat(loadMatchExact))
                  isMultiple = true
                } else {
                  sum = parseFloat(loadMatchExact) * sets
                }
              })
            }
          }
        })
      }
      if (isMultiple) {
        sum = tempLoadStore.reduce((a, b) => a + b)
      }
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
      this.p1 = { desc: 'Total ' + dataForType + ': ', value: sum }
      this.p2 = { desc: 'Average ' + dataForType + ': ', value: (sum / this.yData.length).toFixed(1) }
      this.yData.forEach((value) => {
        storeMax = Math.max(storeMax, value)
      })
      this.p3 = { desc: 'Maximum ' + dataForType + ': ', value: storeMax }
      store = storeMax
      this.yData.forEach((value) => {
        store = Math.min(store, value)
      })
      this.p4 = { desc: 'Minimum ' + dataForType + ': ', value: store }
      this.p5 = { desc: 'Percentage Change: ', value: ((storeMax / store) * 100).toFixed(1) + '%' }
    }
  }
}
</script>
