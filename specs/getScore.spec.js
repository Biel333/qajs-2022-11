import { getScore } from "../src/app.js";

describe("getScore", () => {
  test("Сумма баллов list_1", () => {
    const list_1 = {
      Ann: 5,
    };

    expect(getScore(list_1)).toEqual(5);
  });

  test("Сумма баллов list_2", () => {
    const list_2 = {
      Mike: 3,
      Will: 8,
      Sara: 6,
    };

    expect(getScore(list_2)).toEqual(17);
  });

  test("Сумма баллов list_3", () => {
    const list_3 = {
      Linda: 0,
    };

    expect(getScore(list_3)).toEqual(0);
  });
});
