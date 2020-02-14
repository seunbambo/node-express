const fs = require("fs");
const http = require("http");

const server = http.createServer((request, result) => {
  const file = fs.createReadStream("./myblog.txt");
  file.pipe(result);
});
server.listen(8082, "localhost");
