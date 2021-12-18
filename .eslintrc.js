module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    parser: "babel-eslint",
  },
  extends: ["@nuxtjs", "plugin:nuxt/recommended", "prettier"],
  // add your custom rules here
  rules: {
    // allow async-await
    "generator-star-spacing": "off",
    // allow debugger during development
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
    "vue/comment-directive": 0,
    "vue/no-v-html": 0,
    "vue/component-tags-order": [
      "error",
      {
        order: ["style", "template", "script"],
      },
    ],
    "vue/script-setup-uses-vars": "off",
    "vue/require-default-prop": "off",
  },
};
