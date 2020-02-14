const chalk = require("chalk");
const axios = require("axios");
const commander = require("commander");

commander
  .option("-t --type <type>", "Lookup type")
  .option("-n --number <number>", "Number of results")
  .parse(process.argv);

axios
  .get(`https://swapi.co/api/${commander.type}/${commander.number}`)
  .then(results => {
    console.log(results.data);
  })
  .catch(error => {
    console.log(chalk.red.inverse("An error has occurred"));
  });
