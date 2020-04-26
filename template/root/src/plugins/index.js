import filters from "./filters"
import directives from "./directives"

const install = (Vue, options) => {
  Vue.prototype.$bus = new Vue()
  Vue.use(filters)
  Vue.use(directives)
}

export default {
  install
}
