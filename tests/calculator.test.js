import calculator from "../modules/calculator";

it("add two positive integers", () => {
  expect(calculator.add(2, 2)).toBe(4);
});

it("subtract two positive integers", () => {
  expect(calculator.subtract(9, 2)).toBe(7);
});

it("divide two positive integers", () => {
  expect(calculator.divide(10, 5)).toBe(2);
});

it("multiply two positive integers", () => {
  expect(calculator.multiply(15, 2)).toBe(30);
});
