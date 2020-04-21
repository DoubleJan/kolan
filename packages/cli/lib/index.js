const create = require('./create')    // 创建app
const start = require('./start');     // 启动app

// 对外提供命令行客户端的执行函数，共bin调用
module.exports = {
  create,
  start
}
