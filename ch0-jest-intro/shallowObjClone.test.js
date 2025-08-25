const shallowObjClone = require("./shallowObjClone.js");

test("Create a clone of the object parameter", () => {
  const myObj = { person: "Hitchhiker", number: 42 };

  expect(shallowObjClone(myObj)).toStrictEqual(myObj);
});
