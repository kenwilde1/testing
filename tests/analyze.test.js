import analyze from "../modules/analyze";

it("default array", () => {
  expect(analyze([1, 8, 3, 4, 2, 6])).toStrictEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
});

it("array with length of 1", () => {
  expect(analyze([1])).toStrictEqual({
    average: 1,
    min: 1,
    max: 1,
    length: 1,
  });
});
