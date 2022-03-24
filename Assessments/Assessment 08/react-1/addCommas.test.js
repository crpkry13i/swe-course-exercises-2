const addCommas = require("./addCommas");

describe("#addCommas", () => {
  test("it is a function", () => {
    expect(typeof addCommas).toBe("function");
  });
  test("returns a string with commas", () => {
    expect(addCommas(12345)).toBe("12,345");
  });
});
