const config = require("./config");
const chalk = require("chalk");
const sqlite3 = require("sqlite3").verbose();

const db = new sqlite3.Database(config.databaseName);

db.serialize(() => {
  const stmt = `CREATE TABLE ${config.tableName} (id INTEGER PRIMARY KEY AUTOINCREMENT, title TEXT, date TEXT, author TEXT, post TEXT)`;
  db.run(stmt, err => {
    if (err) {
      console.log(chalk.red("Error Creating database.", err));
    } else {
      console.log(chalk.green("Database Created OK"));
    }
  });
});
