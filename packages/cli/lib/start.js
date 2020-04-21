const {printf} = require('@kolan/utils');

module.exports = (name, cmd) => {
  console.log(cmd);
  if (cmd.env) {
    console.log('\n')
  } else {
    printf.warning(`none of environment variable, default dev`);
    
  }
  printf.message(`${cmd.args}: ${cmd.env} Start on localhost: 8000`);
}