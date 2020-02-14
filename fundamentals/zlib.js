const zlib = require("zlib");
const fs = require("fs");

const gzip = zlib.createGzip();

const input = fs.createReadStream("hello.html");
const output = fs.createWriteStream("hello.html.gz");

input.pipe(gzip).pipe(output);
