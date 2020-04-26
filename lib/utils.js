"use strict"

const path = require("path")
const fs = require("fs-extra")

const templateDir = path.resolve(__dirname, "../template/")
const cwd = process.cwd()

function firstUpperCase(str) {
  return str.replace(/^\S/, s => s.toUpperCase())
}

function camelTrans(str, isBig) {
  let i = isBig ? 0 : 1
  str = str.split("-")
  for (; i < str.length; i++) {
    str[i] = firstUpperCase(str[i])
  }
  return str.join("")
}


const utils = {
  getCwd() {
    return cwd
  },

    /**
     * 用户输入的是用横杠连接的名字
     * 根据用户输入的name生成各类规格变量名: 横杠连接,小驼峰,大驼峰,全大写
     */
  generateNames(name) {
    return {
            // 横杠连接
      fileName: name,

            // 小驼峰
      varName: camelTrans(name),

            // 大驼峰
      className: camelTrans(name, true),

            // 全大写
      constName: name.split("-").join("").toUpperCase()
    }
  },

  getTemplateDir(type) {
    return type ? path.resolve(templateDir, type) : templateDir
  },

  getBranch(_cwd) {
    _cwd = _cwd || process.cwd()
    const headerFile = path.join(_cwd, ".git/HEAD")
    const gitVersion = fs.existsSync(headerFile) && fs.readFileSync(headerFile).toString()

    if (gitVersion) {
      const arr = gitVersion.split(/refs[/\\]heads[/\\]/g)
      const v = arr && arr[1]
      if (v) {
        return v.trim()
      }
    }
    return ""
  },

  getVersion(branch) {
    const version = branch.match(/\d+\.\d+\.\d+$/)
    if (version) {
      return version[0]
    }
    return ""
  },

  getNextVersion(version) {
    const datas = version.split(".").map(item => parseInt(item, 10)).reverse()
    datas[0]++
    for (let index = 0; index < datas.length; index++) {
      if (datas[index] > 9 && index !== datas.length - 1) {
        datas[index] = 0
        datas[index + 1]++
      }
    }
    return datas.reverse().join(".")
  }
}

module.exports = utils
