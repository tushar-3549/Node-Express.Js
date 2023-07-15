// OS

/* const os = require("os");

console.log(os.freemem());
console.log(os.totalmem());
console.log(os.userInfo());
console.log(os.homedir());
console.log(os.hostname()); */

// Path

/* console.log(__dirname);
console.log(__filename); */

const path = require("path");
// console.log(path);
const extensionName = path.extname('practice.cpp');
console.log(extensionName);

const joinName = path.join(__dirname + "/views");
console.log(joinName);

