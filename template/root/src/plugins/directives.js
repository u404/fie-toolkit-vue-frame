import imageDirective from "@sc/vue-ui-h5/lib/directives/image"
import avatorDirective from "@sc/vue-ui-h5/lib/directives/avator"
import lazyload from "@sc/vue-ui-h5/lib/directives/lazyload"

export default {
  install (Vue, options) {
    Vue.directive("image", imageDirective)
    Vue.directive("avator", avatorDirective)
    Vue.directive("lazyload", lazyload)
  }
}
