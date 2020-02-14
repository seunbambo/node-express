const chalk = require("chalk");

const error = msg => {
  console.log(chalk.red(msg));
};

const success = msg => {
  console.log(chalk.green(msg));
};

module.exports = {
  error,
  success
};
