const { printf } = require('@kolan/utils');
const inquirer = require('inquirer');

// 获取用户指定的项目名
async function getAuthor(name) {
  const answer = await inquirer.prompt([{
    name: 'author',
    type: 'input',
    message: (answer) => '请输入项目作者: '
  }]);
  if (answer) {
    printf.log(`OK, 您将创建名为${name}的项目, 它由${answer.author}来负责`);
    isCurrentDir();
  }
}

// 是否在当前目录下创建项目
async function isCurrentDir() {
  const answer = await inquirer.prompt([{
    name: 'inCurrent',
    type: 'confirm',
    message: '是否在当前目录下创建项目？'
  }]);
  if (answer) {
    if (answer.inCurrent) {
      printf.log('OK, 我们会把您的项目创建在这里: ', process.cwd());
    } else {
      printf.log('OK, 我们会重新选择一个目录');
    }
    selectFramework();
  }
}

// 使用以下哪种框架
async function selectFramework() {
  const answer = await inquirer.prompt([{
    name: 'framework',
    type: 'list',
    message: '请选择使用的框架',
    choices: [
      { name: 'Vue', value: 'vue' },
      { name: 'React', value: 'react' },
      { name: 'Angular', value: 'angular' }
    ],
    default: 1
  }]);
  if (answer) {
    printf.log(`OK, ${answer.framework.toUpperCase()}是个相当不错的选择`);
    selectDevLang();
  }
}

// 使用那种开发语言
async function selectDevLang() {
  const answer = await inquirer.prompt([{
    name: 'devLang',
    type: 'checkbox',
    message: '请选择使用的语言:',
    choices: ['JavaScript', 'TypeScript', 'JSX', 'NodeJs for PC'],
    default: 0
  }]);
  if (answer) {
    if (Array.isArray(answer.devLang) && answer.devLang.length > 1) {
      printf.log(`OK, 你现在可以同时使用${
        answer.devLang.reduce((acc, cur) => `${acc}${cur}, `, '')
        }这${answer.devLang.length}种开发方式了`);
    } else {
      printf.log(`OK, 钟情于${answer.devLang[0]}太棒了`);
    }
    selectLintLevel();
  }
}

// 使用什么程度的代码检查
async function selectLintLevel() {
  const answer = await inquirer.prompt([{
    name: 'lintLevel',
    type: 'rawlist',
    message: '请选择代码检查的等级',
    choices: [
      { name: 'None', value: 'none' },
      { name: 'Standard', value: 'standard' },
      { name: 'Strict', value: 'strict' },
      { name: 'Strict ESLint', value: 'sESLint' },
      { name: 'Script TSLint', value: 'sTSLint' }
    ],
    default: 2
  }]);
  if (answer) {
    switch (answer.lintLevel) {
      case 'none':
        printf.log('OK, 技术老鸟通常喜欢相对宽松的环境');
        break;
      case 'standard':
        printf.log('OK, 标准模式适合大多数开发者');
        break;
      default:
        printf.log('OK, 对自己要求高是好事');
        break;
    }
    printf.log('\n');
    printf.message('您已经完成了基本配置, 我们会尽快为您生成项目');
  }
}

async function create(name, cmd) {
  printf.log(name, cmd.args);
  getAuthor(cmd.args).catch((e) => process.exit(1));
}

module.exports = create;