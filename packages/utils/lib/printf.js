// 命令行控制
const chalk = require('chalk');

// 错误输出
function error(err) {
  console.error(chalk.bgRed('ERROR'), ' ', chalk.red(err));
}

// 警告输出
function warning(warn) {
  console.warn(chalk.bgYellow('WARNING'), ' ', chalk.yellow(warn));
}

// 普通日志输出
function log(msg) {
  console.log(msg);
}

// 高亮消息输出
function message(log, name) {
  console.log(chalk.bgCyan(name || 'MESSAGE'), ' ', chalk.cyan(log));
}

// 导出一些基本的样式，再把chalk导出，以便特殊场合也能从统一的地方使用
module.exports = { error, warning, log, message, chalk }
