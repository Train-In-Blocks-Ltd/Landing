module.exports = {
  darkMode: "class",
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
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
