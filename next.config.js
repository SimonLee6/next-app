const path = require("path")
module.exports = {
  env: {
    dev: "",
    prod: ""
  },
  // sass配置
  sassOptions: {
    includePaths: [path.join(__dirname, "./src/sass")]
  }
}