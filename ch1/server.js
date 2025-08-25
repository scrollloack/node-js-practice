// https://www.youtube.com/watch?v=f2EqECiTBL8&t=58s

// How nodejs differs from vanilla js
// 1) Node runs on a server - not in a browser (backend not frontend)
// 2) The console is the terminal window

console.log("Hello world!");

// 3) global object instead of window object

// console.log(global);

// 4) Has Common Core modules that we will explore
// 5) CommonJS modules instead of ES6 modules
// 6) Missing some JS APIs like fetch

const os = require("os");
const path = require("path");
const { add, subtract, multiply, divide } = require("./math.js");

console.log(add(2, 3));
console.log(subtract(2, 3));
console.log(multiply(2, 3));
console.log(divide(2, 3));

// console.log(os.type());
// console.log(os.version());
// console.log(os.homedir());

// console.log(__dirname);
// console.log(__filename);

// console.log(path.dirname(__filename));
// console.log(path.basename(__filename));
// console.log(path.extname(__filename));

// console.log(path.parse(__filename));
