<style>
/* Shared anim */
.svg_item > svg .stroke_color {
  stroke: var(--base_dark)
}
.svg_item > svg .fill_color {
  fill: var(--fore)
}
#editing-session .preview,
#client-user .placeholder,
#stats :is(.reps_data, .reps_desc, .regression_1) {
  opacity: 1
}
#editing-session .editing,
#client-user .profile,
#stats :is(.load_data, .load_desc, .dropdown, .regression_2) {
  opacity: 0
}

/* Editing-session */
#editing-session.animate path.cursor {
  animation: 1.4s editingSessionCursor ease-in-out forwards
}
#editing-session.animate .preview {
  animation: .1s hideEl linear forwards;
  animation-delay: 1.4s
}
#editing-session.animate .editing {
  animation: .1s showEl linear forwards;
  animation-delay: 1.4s
}

/* Client-user */
#client-user.animate path.cursor {
  animation: 1.4s clientUserCursor ease-in-out forwards
}
#client-user.animate .placeholder {
  animation: .1s hideEl linear forwards;
  animation-delay: 1.4s
}
#client-user.animate .profile {
  animation: .1s showEl linear forwards;
  animation-delay: 1.4s
}

/* Stats */
#stats.animate path.cursor {
  animation: 2.4s statsCursor ease-in-out forwards
}
#stats.animate .dropdown {
  animation: 1.4s showHideDropdown linear forwards;
  animation-delay: 1s
}
#stats.animate :is(.reps_data, .reps_desc) {
  animation: .1s hideEl linear forwards;
  animation-delay: 2.4s
}
#stats.animate :is(.load_data, .load_desc) {
  animation: .1s showEl linear forwards;
  animation-delay: 2.4s
}
#stats.animate :is(.point_1, .point_2,.point_3, .point_4, .point_5, .point_6, .point_7, .regression_1, .regression_2) {
  transition: 1s transform, .1s opacity cubic-bezier(.165, .84, .44, 1);
  transition-delay: 2.4s
}
#stats.animate .point_1 {
  transform: translateY(5rem)
}
#stats.animate .point_2 {
  transform: translateY(3rem)
}
#stats.animate .point_3 {
  transform: translateY(0)
}
#stats.animate .point_4 {
  transform: translateY(-2rem)
}
#stats.animate .point_5 {
  transform: translateY(-6rem)
}
#stats.animate .point_6 {
  transform: translateY(-10rem)
}
#stats.animate .point_7 {
  transform: translateY(-15rem)
}
#stats.animate .regression_1 {
  opacity: 0
}
#stats.animate .regression_2 {
  opacity: 1
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
@keyframes statsCursor {
  0% {
    transform: translate(0, 0)
  }
  40% {
    transform: translate(-40%, 0%);
    opacity: 1
  }
  45% {
    transform: translate(-40%, 0%);
    opacity: .4
  }
  50% {
    transform: translate(-40%, 0%);
    opacity: 1
  }
  90% {
    transform: translate(-40%, 10%);
    opacity: 1
  }
  95% {
    transform: translate(-40%, 10%);
    opacity: .4
  }
  100% {
    transform: translate(-40%, 10%);
    opacity: 1
  }
}
@keyframes hideEl {
  from {
    opacity: 1
  }
  to {
    opacity: 0
  }
}
@keyframes showEl {
  from {
    opacity: 0
  }
  to {
    opacity: 1
  }
}
@keyframes showHideDropdown {
  0% {
    opacity: 1
  }
  99% {
    opacity: 1
  }
  100% {
    opacity: 0
  }
}
</style>

<style scoped>
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
</template>

<script>
import InlineSvg from 'vue-inline-svg'

export default {
  components: {
    InlineSvg
  },
  data () {
    return {
      svgs: [
        { id: 'editing-session', desc: 'Write in-depth session plans quickly and with great tools' },
        { id: 'client-user', desc: 'Give access to your clients and recieve feedback' },
        { id: 'stats', desc: 'Track data without spreadsheets and visualise instantly' }
      ]
    }
  },
  mounted () {
    const OBSERVER = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        entry.target.lastChild.setAttribute('class', entry.isIntersecting ? 'animate' : '')
      })
    }, { threshold: 0.5 })
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
