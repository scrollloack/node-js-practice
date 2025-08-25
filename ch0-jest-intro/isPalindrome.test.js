const isPalindrome = require("./isPalindrome.js");

test("Tacocat returns true", () => {
  expect(isPalindrome("Tacocat")).toBe(true);
});

test("Archie returns false", () => {
  expect(isPalindrome("Archie")).toBe(false);
});
