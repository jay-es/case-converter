module.exports = {
  env: {
    browser: true,
    es6: true,
    mocha: true,
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
  globals: {
  }
};
