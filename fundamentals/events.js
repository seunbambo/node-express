// const events = require("events");

// let userLoggedIn = 0;

// const eventEmitter = new events.EventEmitter();

// eventEmitter.on("userLoggedIn", () => {
//   userLoggedIn += 1;
//   console.log(`There are ${userLoggedIn} users logged in`);
// });
// eventEmitter.emit("userLoggedIn");

const fs = require("fs");

const watcher = fs.watch("events.js");

watcher.on("change", () => {
  console.log("File has changed!/");
});
