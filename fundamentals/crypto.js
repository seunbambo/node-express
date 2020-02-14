const crypto = require("crypto");

// const hash = crypto
//   .createHash("md5")
//   .update("password")
//   .digest("hex");

// console.log(hash);

const secret = "secret key";

const hash = crypto
  .createHmac("sha25", secret)
  .update("password")
  .digest("hex");

console.log(hash);
