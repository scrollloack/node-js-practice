const reverseString = require("./reverseString.js");

function hello() {
  return "Hello!";
}

function isPalindrome(word) {
  return word.toLowerCase() === reverseString(word).toLowerCase();
}

module.exports = isPalindrome;
