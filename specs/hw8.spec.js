import config_Petstore from "../config.js";
import user from "../framework/services/users_petStore.js";
import petStore from "../framework/services/petStore.js";

describe("5 API-тестов на сервис Petstore", () => {
  test("Получение питомца по статусу available", async () => {
    const petStatus = petStore.getPetByStatus("available");
    expect(petStatus).toEqual(200);
  });

  // test("Получение питомца по статусу pending", async () => {
  //   expect().toEqual(200);
  // });

  // test("Получение питомца по статусу sold", async () => {
  //   expect().toEqual(200);
  // });

  //   test("-", async () => {
  //     expect().toEqual(200);
  //   });

  //   test("-", async () => {
  //     expect().toEqual(200);
  //   });

  //   test("-", async () => {
  //     expect().toEqual(200);
  //   });
});
