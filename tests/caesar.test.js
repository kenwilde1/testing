import caesar from "../modules/caesar";

it("caeser cipher with a shift of 1", () => {
  expect(caesar("abcde", 1)).toBe("bcdef");
});

it("caeser cipher with a shift of 20", () => {
  expect(caesar("abcde", 20)).toBe("uvwxy");
});

it("caeser cipher with a shift of 26", () => {
  expect(caesar("abcde", 26)).toBe("abcde");
});

it("caeser cipher with a shift of 100", () => {
  expect(caesar("abcde", 100)).toBe("wxyza");
});
