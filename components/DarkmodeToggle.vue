<style>
.toggle_wrapper {
  display: flex
}
.mode_icon {
  width: 20px;
  height: 20px;
  margin: auto;
  margin-right: .6rem
}
.mode_icon :is(.sun, .moon) {
  transition: .6s all cubic-bezier(.165, .84, .44, 1)
}
.mode_icon .moon {
  opacity: 0
}
.darkmode .sun {
  opacity: 0
}
.darkmode .moon {
  opacity: 1
}
.switch {
  position: relative;
  display: inline-block;
  width: 50px;
  height: 26px
}
.switch input {
  opacity: 0;
  width: 0;
  height: 0
}
.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: var(--base_dark);
  -webkit-transition: .4s;
  border-radius: 34px;
  transition: .4s
}
.slider:before {
  position: absolute;
  content: '';
  height: 18px;
  width: 18px;
  left: 4px;
  bottom: 4px;
  background-color: var(--fore);
  -webkit-transition: .4s;
  border-radius: 50%;
  transition: .4s
}
input:checked + .slider {
  background-color: var(--base_dark)
}
input:focus + .slider {
  box-shadow: 0 0 1px var(--base_dark)
}
input:checked + .slider:before {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px)
}
</style>

<template>
  <div class="toggle_wrapper">
    <inline-svg :src="require('../assets/svg/darkmode.svg')" :class="{ darkmode: darkmodeOn }" class="mode_icon" />
    <label class="switch">
      <input type="checkbox" @change="darkmode()">
      <span :class="{ darkmode: darkmodeOn }" class="slider" />
    </label>
  </div>
</template>

<script>
import InlineSvg from 'vue-inline-svg'

export default {
  components: {
    InlineSvg
  },
  data () {
    return {
      darkmodeOn: false
    }
  },
  methods: {
    darkmode () {
      if (!this.darkmodeOn) {
        document.documentElement.style.setProperty('--low_shadow', '0 0 2px 0 #FFFFFF60')
        document.documentElement.style.setProperty('--back', '#282828')
        document.documentElement.style.setProperty('--fore', '#383838')
        document.documentElement.style.setProperty('--base_dark', 'white')
        document.documentElement.style.setProperty('--base_light', 'white')
        document.documentElement.style.setProperty('--base_accent', '#282828')
        document.documentElement.style.setProperty('--overlay', '#383838')
      } else {
        document.documentElement.style.setProperty('--low_shadow', '0 0 20px 10px #28282808')
        document.documentElement.style.setProperty('--back', '#F9F9F9')
        document.documentElement.style.setProperty('--fore', 'white')
        document.documentElement.style.setProperty('--base_dark', '#282828')
        document.documentElement.style.setProperty('--base_light', '#585858')
        document.documentElement.style.setProperty('--base_accent', 'white')
        document.documentElement.style.setProperty('--overlay', 'rgba(255, 255, 255, .95)')
      }
      this.darkmodeOn = !this.darkmodeOn
    }
  }
}
</script>
