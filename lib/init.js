"use strict"

const path = require("path")
const chalk = require("chalk")
const inquirer = require("inquirer")
const _ = require("underscore")
const spawn = require("cross-spawn")
const fs = require("fs-extra")

const utils = require("./utils")

const cwd = utils.getCwd()


const compileConfig = (fileName) => {
  const oldConf = require(path.resolve(cwd, fileName))

  const newConf = require(utils.getTemplateDir("root/" + fileName))

  return Object.assign({}, oldConf, newConf)
}

module.exports = function* (fie) {

  const cliFile = path.resolve(fie.getFieModulesPath(), "@sc/fie-toolkit-vue/node_modules/@sc/vue-cli/bin/vue.js")

  const spawnOpt = {
    cwd,
    env: process.env,
    stdio: "inherit"
  }

  spawn.sync(cliFile, ["create", "."], spawnOpt)

  // const projectName = cwd.split(path.sep).pop()

  // 将template目录中的src拷贝到项目目录下
  fs.copySync(utils.getTemplateDir("root/src"), path.resolve(cwd, "src"))

  fs.copySync(utils.getTemplateDir("root/fie.config.js"), path.resolve(cwd, "fie.config.js"))

  const packageCompile = compileConfig("package.json")
  fs.writeFileSync(path.resolve(cwd, "package.json"), JSON.stringify(packageCompile, null, 2))

  // 再次安装依赖

  fie.logInfo("安装常用扩展依赖...")
  yield fie.cnpmInstall()

  const answer = yield inquirer.prompt([
    {
      type: "confirm",
      name: "git",
      message: chalk.green("是否创建远程仓库并初始化日常分支？"),
      default: true
    }
  ])

  if (answer.git) {
    spawn.sync("fie", ["git", "create"], spawnOpt)
  }

  console.log(chalk.yellow("\n--------------------初始化成功,请按下面提示进行操作--------------------\n"))
  console.log(chalk.green(`${chalk.yellow("$ fie start")}               # 可一键开启项目开发环境`))
  console.log(chalk.green(`${chalk.yellow("$ fie build")}               # 构建本地代码`))
  console.log(chalk.green(`${chalk.yellow("$ fie publish")}             # 发布代码`))
  console.log(chalk.green(`${chalk.yellow("$ fie lint")}                # elint代码`))
  console.log(chalk.green(`${chalk.yellow("$ fie help")}                # 可查看当前套件的详细帮助`))
}
