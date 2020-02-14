const config = require("./config");
const chalk = require("chalk");
const sqlite3 = require("sqlite3").verbose();
const inquirer = require("inquirer");

const db = new sqlite3.Database(config.databaseName);

inquirer
  .prompt([
    {
      name: "title",
      message: "Post Title:"
    },
    {
      name: "author",
      message: "Author:"
    },
    {
      name: "date",
      message: "Date:",
      default: new Date().toUTCString()
    },
    {
      name: "post",
      message: "Post Content:"
    }
  ])
  .then(answers => {
    const { title, author, date, post } = answers;
    const stmt = `INSERT INTO ${config.tableName} (title, date, author, post) VALUES ("${title}", "${date}", "${author}", "${post}")`;
    db.serialize(() => {
      db.run(stmt);
      console.log(chalk.green("New post added to the database"));
    });
    db.close();
  });
