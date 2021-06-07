<style>
/* Shared anim */
.svg_item > svg .stroke_color {
  stroke: var(--base_dark)
}
#editing-session .preview,
#client-user .placeholder {
  opacity: 1
}
#editing-session .editing,
#client-user .profile {
  opacity: 0
}

/* Editing-session */
#editing-session.animate path.cursor {
  animation: 1.4s editingSessionCursor ease-in-out forwards
}
#editing-session.animate .preview {
  animation: .1s hidePreview linear forwards;
  animation-delay: 1.4s
}
#editing-session.animate .editing {
  animation: .1s showEditing linear forwards;
  animation-delay: 1.4s
}

/* Editing-session */
#client-user.animate path.cursor {
  animation: 1.4s clientUserCursor ease-in-out forwards
}
#client-user.animate .placeholder {
  animation: .1s hidePreview linear forwards;
  animation-delay: 1.4s
}
#client-user.animate .profile {
  animation: .1s showEditing linear forwards;
  animation-delay: 1.4s
}

@keyframes editingSessionCursor {
  0% {
    transform: translate(0, 0)
  }
  90% {
    transform: translate(-40%, 30%);
    opacity: 1
  }
  95% {
    transform: translate(-40%, 30%);
    opacity: .4
  }
  100% {
    transform: translate(-40%, 30%);
    opacity: 1
  }
}
@keyframes clientUserCursor {
  0% {
    transform: translate(0, 0)
  }
  90% {
    transform: translate(-30%, -10%);
    opacity: 1
  }
  95% {
    transform: translate(-30%, -10%);
    opacity: .4
  }
  100% {
    transform: translate(-30%, -10%);
    opacity: 1
  }
}
@keyframes hidePreview {
  from {
    opacity: 1
  }
  to {
    opacity: 0
  }
}
@keyframes showEditing {
  from {
    opacity: 0
  }
  to {
    opacity: 1
  }
}
</style>

<style scoped>
/* Home Intro */
.home_intro {
  margin: 0 auto;
  width: 70%
}
iframe {
  display: flex;
  margin: auto
}

/* Svgs */
.container_svg {
  display: grid;
  grid-gap: 6rem
}
.svg_item {
  display: grid;
  grid-template-areas: 'a b';
  grid-template-columns: 1fr 1fr;
  grid-gap: 6rem
}
.svg_item h2 {
  margin: auto;
  text-align: right
}
.alt_svg_item {
  grid-template-areas: 'b a'
}
.alt_svg_item h2 {
  text-align: left
}

@media (max-width: 992px) {
  .home_intro {
    width: 100%
  }
  .svg_item img:hover {
    transform: scale(1)
  }
}
@media (max-width: 768px) {
  .svg_item {
    grid-template-columns: 1fr;
    grid-template-areas:
      'a'
      'b'
  }
  .svg_item h2 {
    text-align: left
  }
}
</style>

<template>
  <div id="home">
    <div class="home_intro">
      <h1>
        We've taken health and fitness programming to the next level.
      </h1>
      <div class="spacer" />
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/2vwnB1fnxqI"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      />
    </div>
    <div class="spacer--large" />
    <div class="container_svg">
      <div
        v-for="(item, index) in svgs"
        :key="`svg_${index}`"
      >
        <div
          class="svg_item"
          :class="{ alt_svg_item: (index + 1) % 2 == 0 }"
        >
          <h2 style="grid-area: a">
            {{ item.desc }}
          </h2>
          <inline-svg
            :id="item.id"
            :src="require(`../assets/anim-elements/${item.id}.svg`)"
            style="grid-area: b"
          />
        </div>
        <div class="spacer" />
      </div>
    </div>
    <div class="spacer" />
    <benefits />
    <div class="spacer--large" />
    <payment />
    <div class="spacer" />
  </div>
</template>

<script>
import InlineSvg from 'vue-inline-svg'
import Payment from '../components/Payment'
import Benefits from '../components/Benefits'

export default {
  components: {
    InlineSvg,
    Payment,
    Benefits
  },
  data () {
    return {
      title: 'Want to train more clients effectively?',
      svgs: [
        { id: 'editing-session', desc: 'Write in-depth session plans quickly and with great tools' },
        { id: 'client-user', desc: 'Give access to your clients and recieve feedback' }
      ]
    }
  },
  beforeCreate () {
    this.$parent.$parent.metaHelper.title = 'Affordable Personal Training Software'
    this.$parent.$parent.metaHelper.description = 'Over-delivering doesn\'t have to cost you. Impress your clients and help them reach their health and fitness goals.'
    this.$parent.$parent.metaHelper.url = 'https://traininblocks.com/'
  },
  mounted () {
    const OBSERVER = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        entry.target.lastChild.setAttribute('class', entry.isIntersecting ? 'animate' : '')
      })
    }, { threshold: 0.8 })
    document.querySelectorAll('.svg_item').forEach((svgItem) => {
      OBSERVER.observe(svgItem)
    })
  },
  methods: {
    animateSvg (id, animate) {
      document.getElementById(id).setAttribute('class', animate ? 'animate' : '')
    }
  }
}
</script>
