module.exports = {
  darkMode: "class",
  content: [
    "components/**/*.vue",
    "layouts/**/*.vue",
    "pages/**/*.vue",
    "templates/**/*.vue",
    "plugins/**/*.js",
    "nuxt.config.js",
  ],
  theme: {
    extend: {
      animation: {
        bounce: "bounce .6s linear infinite",
      },
      keyframes: {
        bounce: {
          "0%, 100%": {
            transform: "translateY(0%)",
            "animation-timing-function": "cubic-bezier(0, 0, 0.2, 1)",
          },
          "50%": {
            transform: "translateY(-10%)",
            "animation-timing-function": "cubic-bezier(0.8, 0, 1, 1)",
          },
        },
      },
      borderWidth: {
        3: "3px",
      },
      colors: {
        slate: "#282828",
        graphite: "#686868",
        paper: "#F9F9F9",
        pine: "#047857",
        tomato: "#B91C1C",
        pinkPanther: "#FF7B9C",
        ghostWhite: "#F7F7FF",
        ghostCoral: "#576066",
        beauBlue: "#BDD5EA",
      },
      screens: {
        xs: "400px",
      },
    },
  },
  variants: {
    extend: {
      animate: ["group-hover"],
    },
  },
  plugins: [],
};
