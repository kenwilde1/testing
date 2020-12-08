import reverseString from "../modules/reverseString";

it("all lowercase test", () => {
  expect(reverseString("kenny")).toBe("ynnek");
});

it("all uppercase test", () => {
  expect(reverseString("KENNY")).toBe("YNNEK");
});
