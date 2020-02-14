const dns = require("dns");

try {
  dns.lookup("juniordevelopercentracom", (err, value) => {
    console.log(value);
  });
} catch (err) {
  console.log(err);
}
// dns.resolve("juniordevelopercentral.com", "MX", (err, value) => {
//   if (err) {
//     console.log(err);
//     return;
//   }

//   console.log(value);
// });

// dns.reverse("167.99.129.42", (err, value) => {
//   if (err) {
//     console.log(err);
//     return;
//   }

//   console.log(value);
// });
