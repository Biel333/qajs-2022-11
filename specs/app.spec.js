import { nameIsValid, fullTrim, getTotal } from "../src/app.js";

describe("nameIsValid", () => {
  test.each([
    ["", false],
    ["a", false],
    ["Ev a", false],
    ["Eva", true],
  ])("Значение %p является %s", (name, expected) => {
    expect(nameIsValid(name)).toBe(expected);
  });
});

describe("fullTrim", () => {
  test("'' равно ''", () => {
    expect(fullTrim("")).toBe("");
  });

  test("'you are welcome!' равно 'youarewelcome!'", () => {
    expect(fullTrim("you are welcome!")).toBe("youarewelcome!");
  });

  test("'you are welcome!' не равно 'you are welcome!'", () => {
    expect(fullTrim("you are welcome!")).not.toBe("you are welcome!");
  });

  test("'Eva' равно 'Eva'", () => {
    expect(fullTrim("Eva")).toBe("Eva");
  });
});

describe("getTotal", () => {
  test("10*10=100р , скидка 100р", () => {
    expect(getTotal([{ price: 10, quantity: 10 }], 100)).toBe(0);
  });

  test("10*10=100р 30*5=150, скидки нет", () => {
    expect(
      getTotal([
        { price: 10, quantity: 10 },
        { price: 30, quantity: 5 },
      ]),
    ).toBe(250);
  });

  test("Ошибка, если значение скидки не число", () => {
    expect(() => getTotal([{ price: 10, quantity: 10 }], "g")).toThrow(
      "Скидка должна быть числом",
    );
  });

  test("Ошибка, если значение скидки отрицательное", () => {
    expect(() => getTotal([{ price: 10, quantity: 10 }], -5)).toThrow(
      "Процент скидки не может быть отрицательным",
    );
  });
});
