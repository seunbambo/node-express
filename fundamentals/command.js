const arguments = process.argv.slice(2);
const sum = arguments.reduce((acc, val) => acc + parseInt(val), 0);

console.log(sum);
