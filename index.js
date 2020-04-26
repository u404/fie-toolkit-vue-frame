"use strict"

const toolkitVue = require("@sc/fie-toolkit-vue")

module.exports = {
  ...toolkitVue,
  init: require("./lib/init")
}
