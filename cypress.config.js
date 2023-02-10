const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://blogdoagi.com.br',
    experimentalRunAllSpecs: true,
  },
  fixturesFolder: false,
  viewportWidth: 1200,
  viewportHeight: 960,
})