const chalk = require('chalk');

const config = {
  default: {
    color: 'bgBlue',
    text: 'NOTE',
  },
  success: {
    color: 'bgGreen',
    text: 'SUCCESS'
  },
  error: {
    color: 'bgRed',
    text: 'ERROR'
  }
};

const log = (message, type = 'default') => {
  const bgColor = config[type].color || config.default.color;
  console.log(
    chalk.white[bgColor].bold(config[type].text),
    ` ${message}`
  );
};

module.exports = log;
