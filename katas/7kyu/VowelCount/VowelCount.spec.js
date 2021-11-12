const getCount = require("./VowelCount");

test("displays number of vowels in a given string", () => {
  expect(getCount("abracadabra")).toBe(5);
});
