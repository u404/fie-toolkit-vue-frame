import Vue from "vue"
import Vuex from "vuex"

import env from "@sc/lib-env"
import { queryString } from "@sc/lib-web-utils"
import services from "@/services"

const queryData = queryString.parse(location.search)

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    inApp: env.browser.inApp,
    queryData: queryData,
    baseData: {}
  },
  getters: {},
  mutations: {
    setState (state, data) {
      Object.keys(data).forEach(key => {
        if (key in state) {
          state[key] = data[key]
        }
      })
    }
  },
  actions: {
    getBaseData({ state, commit }) {
      return Promise.resolve()
    }
  }
})
