var webpackConfig = require('./webpack.config.js')

module.exports = function (config) {
  config.set({
    basePath: './src',
    browsers: ['PhantomJS'],
    files: ['./**/test/*.spec.js'],
    frameworks: ['mocha'],
    preprocessors: {
      './**/test/*.spec.js': ['webpack']
    },
    webpack: webpackConfig,
    webpackMiddleware: {
      noInfo: true
    }
  })
}
