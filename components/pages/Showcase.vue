<style>
/* Shared anim */
.svg_item > svg .stroke_color {
  @apply stroke-gray-800 dark:stroke-white;
}
.svg_item > svg .fill_color {
  @apply fill-white dark:fill-gray-800;
}
#editing-session .preview,
#client-user .placeholder,
#stats :is(.reps_data, .reps_desc, .regression_1) {
  opacity: 1;
}
#editing-session .editing,
#client-user .profile,
#stats :is(.load_data, .load_desc, .dropdown, .regression_2) {
  opacity: 0;
}

/* Editing-session */
#editing-session.animate path.cursor {
  animation: 1.4s editingSessionCursor ease-in-out forwards;
}
#editing-session.animate .preview {
  animation: 0.1s hideEl linear forwards;
  animation-delay: 1.4s;
}
#editing-session.animate .editing {
  animation: 0.1s showEl linear forwards;
  animation-delay: 1.4s;
}

/* Client-user */
#client-user.animate path.cursor {
  animation: 1.4s clientUserCursor ease-in-out forwards;
}
#client-user.animate .placeholder {
  animation: 0.1s hideEl linear forwards;
  animation-delay: 1.4s;
}
#client-user.animate .profile {
  animation: 0.1s showEl linear forwards;
  animation-delay: 1.4s;
}

/* Stats */
#stats.animate path.cursor {
  animation: 2.4s statsCursor ease-in-out forwards;
}
#stats.animate .dropdown {
  animation: 1.4s showHideDropdown linear forwards;
  animation-delay: 1s;
}
#stats.animate :is(.reps_data, .reps_desc) {
  animation: 0.1s hideEl linear forwards;
  animation-delay: 2.4s;
}
#stats.animate :is(.load_data, .load_desc) {
  animation: 0.1s showEl linear forwards;
  animation-delay: 2.4s;
}
#stats.animate
  :is(.point_1, .point_2, .point_3, .point_4, .point_5, .point_6, .point_7, .regression_1, .regression_2) {
  transition: 1s transform, 0.1s opacity cubic-bezier(0.165, 0.84, 0.44, 1);
  transition-delay: 2.4s;
}
#stats.animate .point_1 {
  transform: translateY(5rem);
}
#stats.animate .point_2 {
  transform: translateY(3rem);
}
#stats.animate .point_3 {
  transform: translateY(0);
}
#stats.animate .point_4 {
  transform: translateY(-2rem);
}
#stats.animate .point_5 {
  transform: translateY(-6rem);
}
#stats.animate .point_6 {
  transform: translateY(-10rem);
}
#stats.animate .point_7 {
  transform: translateY(-15rem);
}
#stats.animate .regression_1 {
  opacity: 0;
}
#stats.animate .regression_2 {
  opacity: 1;
}

@keyframes editingSessionCursor {
  0% {
    transform: translate(0, 0);
  }
  90% {
    transform: translate(-40%, 30%);
    opacity: 1;
  }
  95% {
    transform: translate(-40%, 30%);
    opacity: 0.4;
  }
  100% {
    transform: translate(-40%, 30%);
    opacity: 1;
  }
}
@keyframes clientUserCursor {
  0% {
    transform: translate(0, 0);
  }
  90% {
    transform: translate(-30%, -10%);
    opacity: 1;
  }
  95% {
    transform: translate(-30%, -10%);
    opacity: 0.4;
  }
  100% {
    transform: translate(-30%, -10%);
    opacity: 1;
  }
}
@keyframes statsCursor {
  0% {
    transform: translate(0, 0);
  }
  40% {
    transform: translate(-40%, 0%);
    opacity: 1;
  }
  45% {
    transform: translate(-40%, 0%);
    opacity: 0.4;
  }
  50% {
    transform: translate(-40%, 0%);
    opacity: 1;
  }
  90% {
    transform: translate(-40%, 10%);
    opacity: 1;
  }
  95% {
    transform: translate(-40%, 10%);
    opacity: 0.4;
  }
  100% {
    transform: translate(-40%, 10%);
    opacity: 1;
  }
}
@keyframes hideEl {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
@keyframes showEl {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@keyframes showHideDropdown {
  0% {
    opacity: 1;
  }
  99% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
</style>

<template>
  <div>
    <div v-for="(item, index) in svgs" :key="`svg_${index}`">
      <div
        class="flex mb-16 svg_item"
        :class="{ 'flex-row-reverse': index % 2 === 0 }"
      >
        <txt
          type="subtitle"
          class="w-7/12 my-auto"
          :class="index % 2 === 0 ? 'ml-12' : 'mr-12'"
        >
          {{ item.desc }}
        </txt>
        <inline-svg
          :id="item.id"
          :src="require(`../../assets/anim-elements/${item.id}.svg`)"
          class="w-5/12"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Txt from "../../components/elements/Txt";

export default {
  components: {
    Txt,
  },
  data() {
    return {
      svgs: [
        {
          id: "editing-session",
          desc: "Write in-depth session plans quickly and with great tools",
        },
        {
          id: "client-user",
          desc: "Give access to your clients and recieve feedback",
        },
        {
          id: "stats",
          desc: "Track data without spreadsheets and visualise instantly",
        },
      ],
    };
  },
  mounted() {
    setTimeout(() => {
      const OBSERVER = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            entry.target.lastChild.setAttribute(
              "class",
              entry.isIntersecting ? "animate w-5/12" : "w-5/12"
            );
          });
        },
        { threshold: 0.5 }
      );
      document.querySelectorAll(".svg_item").forEach((svgItem) => {
        OBSERVER.observe(svgItem);
      });
    }, 1000);
  },
};
</script>
