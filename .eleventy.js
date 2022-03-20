const sass = require('./config/sass-process')
const svgContents = require('eleventy-plugin-svg-contents')

module.exports = (config) => {
  config.addFilter('svgContents', require('./filters/svgContents.js'))
  // config.addPlugin(svgContents);
  //Watching for modificaions in style directory
  sass('./src/scss/style.scss', './_site/css/style.css')

  config.setBrowserSyncConfig({
    files: './_site/css/style.css',
  })
  config.addWatchTarget('./src/fragments/')
  config.addWatchTarget('./src/')

  return {
    autoescape: false,
    dir: {
      input: 'views',
      output: '_site',
    },
    pathPrefix: '/',
    dataTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',
    markdownTemplateEngine: 'njk',
    templateFormats: ['njk', 'html', 'md', '11ty.js'],
  }
}
