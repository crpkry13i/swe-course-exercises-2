const unroll = require("./unroll");

describe("#unroll", function () {
  it("is a function", function () {
    expect(typeof unroll).toEqual("function");
  });

  it("returns empty array for array empty array", () => {
    expect(unroll([])).toEqual([]);
  });

  it("returns unrolled array (numbers)", () => {
    expect(
      unroll([
        [1, 2, 3, 4],
        [5, 6, 7, 8],
      ])
    ).toEqual([1, 2, 3, 4, 8, 7, 6, 5]);
  });

  it("returns unrolled array (strings)", () => {
    expect(
      unroll([
        ["a", "b", "c"],
        ["d", "e", "f"],
      ])
    ).toEqual(["a", "b", "c", "f", "e", "d"]);
  });
});
