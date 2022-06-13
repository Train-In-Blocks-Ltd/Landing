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
      borderWidth: {
        3: "3px",
      },
      colors: {
        slate: "#282828",
        graphite: "#686868",
        paper: "#F9F9F9",
        pine: '#047857',
        tomato: '#B91C1C',
        pinkPanther: '#FF7B9C',
        ghostWhite: '#F7F7FF',
        ghostCoral: '#576066',
        beauBlue: '#BDD5EA'
      },
    },
  },
  plugins: [],
};
