const fs = require("fs");

// const dir = fs.readdirSync(__dirname);
// fs.renameSync("data.txt", "file-system/data.txt");

fs.watchFile("file-system/data.txt", () => {
  console.log("Data file was changed");
});
