'use strict'
const glob = require('glob')
const fs = require('fs')

const pages = {}

glob.sync('./src/pages/**/app.js').forEach(path => {
  const chunk = path.split('./src/pages/')[1].split('/app.js')[0]
  pages[chunk] = {
    entry: path,
    template: 'public/index.html',
    title: chunk.charAt(0).toUpperCase() + chunk.slice(1),
    filename: `${chunk}.html`,
    chunks: ['chunk-vendors', 'chunk-common', chunk]
  }
})

fs.writeFile('config/pages.json', JSON.stringify(pages, null, 2), (error) => {
  console.log(error)
}) // We save our pages for later use

module.exports = {
  runtimeCompiler: true, // This will inject VueJS client on our components
  parallel: true, // Lets use all our power to compile!
  outputDir: 'graphics/',
  baseUrl: process.env.NODE_ENV === 'production' ? './' : '/',
  pages: pages,
  chainWebpack: config => config.plugins.delete('named-chunks')
}
