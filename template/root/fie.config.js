"use strict"

module.exports = {
  toolkit: "fie-toolkit-vue",

  toolkitConfig: {
    group: "fe",

    /**
     * publishPages配置页面发布（必须）
     * outputPath {string} 对应dist目录 例如：index.html
     * publicPath {string} 对应根域名 例如：test/index.html
     * description {string} 页面描述
     */
    // publishPages: [
    //   {
    //     outputPath: "index.html",
    //     publicPath: "",
    //     description: ""
    //   }
    // ]
  },

  configureWebpack: {
    externals: {
      vue: "Vue",
      vuex: "Vuex"
    }
  },

  css: {
    loaderOptions: {
      sass: {
        data: `@import "src/common/style/mixins.scss";`
      }
    },
    modules: false
  },

  // 多页开发使用 pages选项
  // pages: {
  //   myPage: {
  //     entry: "src/pages/myPage/main.js",
  //     template: "src/pages/myPage/index.html",
  //     filename: "myPage.html"
  //   }
  // },

  devServer: {
    proxy: {
      "/": {
        ws: false,
        target: "https://api-test.smartcinema.com.cn/",
        changOrigin: true
      }
    }
  }
}
