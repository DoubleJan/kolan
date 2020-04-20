const { Command } = require('commander')
const handler = require('../lib')

const program = new Command()

program
  .version('1.0.1')
  .name('@saber/cli')
  .usage('<command> [options]')

program
  .command('create <app-name>')
  .alias('c')
  .description('create an app with command')
  .action((name, cmd) => console.log('create: ', name, cmd))

  program
  .command('start <app-name>')
  .alias('s')
  .option('-e, --env <env>', 'select an environment variable for your saber app', 'dev')
  .description('start your saber app')
  .action((name, cmd) => console.log(`start ${name} at ${cmd.env} environment`))

program.parse(process.argv);