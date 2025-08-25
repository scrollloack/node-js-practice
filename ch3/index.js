// NPM modules

// https://www.youtube.com/watch?v=f2EqECiTBL8&t=2717s

// console.log("testing!");

const { format } = require("date-fns");
const { v4: uuid } = require("uuid");

console.log(format(new Date(), "yyyyMMdd\tHH:mm:ss"));

console.log(uuid());

console.log();
