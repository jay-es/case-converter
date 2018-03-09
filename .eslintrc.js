module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'standard',
    'plugin:vue/recommended'
  ],
  plugins: [
    'vue'
  ],
  rules: {
    'vue/max-attributes-per-line': [2, { singleline: 2 }]
  },

  overrides: [
    {
      files: "src/**/test/*.spec.js",
      env: {
        mocha: true
      }
    }
  ]
};
