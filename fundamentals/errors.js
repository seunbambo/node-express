const fs = require("fs");

fs.readFile("none-existent/file/here", (err, data) => {
  if (err) {
    console.log(err);
    console.log("Function exiting...");
    return;
  }
  console.log(data);
});
