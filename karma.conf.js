var webpackConfig = require('./webpack.config.js')

module.exports = function (config) {
  config.set({
    basePath: './src',
    browsers: ['ChromeHeadless'],
    files: ['./**/test/*.spec.js'],
    frameworks: ['mocha'],
    preprocessors: {
      './**/test/*.spec.js': ['webpack']
    },
    webpack: webpackConfig,
    webpackMiddleware: {
      quiet: true
    }
  })
}
