import "@/common/style/reset.scss"

import Vue from "vue"

import "@sc/lib-web-utils" // 引入一系列扩展方法

import "@sc/vue-ui-h5/lib/themes/theme-default/index.css"
import ui from "@sc/vue-ui-h5"

import "@sc/vue-ui-common/lib/themes/theme-default/index.css"
import commonUI from "@sc/vue-ui-common"

import plugins from "@/plugins"

import store from "./store"

import App from "./App.vue"

Vue.use(ui)

Vue.use(commonUI)

Vue.use(plugins)

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App)
}).$mount("#app")

console.log("webviewSize", window.innerWidth, window.innerHeight)
