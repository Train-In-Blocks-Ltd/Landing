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
        gray: {
          100: "#F9F9F9",
          200: "#686868",
          800: "#282828",
        },
      },
    },
  },
  plugins: [],
};
