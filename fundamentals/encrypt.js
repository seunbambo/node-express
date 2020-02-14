const crypto = require("crypto");

const algorithm = "aes-192-cbc";
const password = "Password used to generate key";
const key = crypto.scryptSync(password, "salt", 24);
const cipher = crypto.createCipher(algorithm, key);

let encrypted = "";
cipher.on("readable", () => {
  let chunk;
  while (null !== (chunk = cipher.read())) {
    encrypted += chunk.toString("hex");
  }
});
cipher.on("end", () => console.log(encrypted));

cipher.write("some clear text data");
cipher.end();
