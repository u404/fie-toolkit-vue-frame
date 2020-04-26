const install = function (Vue, options) {
  Vue.filter("fixPhone", function (value) {
    if (!value) return ""
    return (value + "").replace(/^(\d{3})\d{4}(\d{4})$/, "$1****$2")
  })

  Vue.filter("fixDate", function (value) {
    if (!value) return ""
    let time = value
    if (!(value instanceof Date)) {
      time = new Date(value)
    }
    let now = new Date()
    let timediff = Math.floor((now - time) / 1000)
    if (timediff < 60) {
      return "刚刚"
    }
    if (timediff < 3600) {
      return Math.floor(timediff / 60) + "分钟前"
    }
    if (timediff < 3600 * 12) {
      return Math.floor(timediff / 60 / 12) + "小时前"
    }
    if (time.getFullYear() !== now.getFullYear()) {
      return time.format("yyyy-MM-dd hh:mm")
    }
    return time.format("MM-dd hh:mm")
  })
}

export default {
  install
}
