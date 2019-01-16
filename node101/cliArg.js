const fs = require('fs');
const arg = process.argv;
// console.log(typeof(arg));
// console.log(arg[2]);
console.log(`Hello, ${arg[2]}`);
console.log(fs.readFileSync(arg[1]).toString());