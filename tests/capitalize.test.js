import capitalize from "../modules/capitalize";

it("all lowercase test", () => {
  expect(capitalize("kenny")).toBe("Kenny");
});

it("all uppercase test", () => {
  expect(capitalize("KENNY")).toBe("Kenny");
});
