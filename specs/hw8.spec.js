// import { petStore } from "../framework/services/petStore.js";
// import { newPet } from "../framework/fixtures/newPet.js";
// import { updatePet } from "../framework/fixtures/updatePet.js";

// describe("5 API-тестов на сервис Petstore", () => {
//   test("Получение питомца по статусу available", async () => {
//     const petStatus = await petStore.getPetByStatus("available");
//     expect(petStatus.status).toEqual(200);
//   });

//   test("Получение питомца по статусу pending", async () => {
//     const petStatus = await petStore.getPetByStatus("pending");
//     expect(petStatus.status).toEqual(200);
//   });

//   test("Получение питомца по статусу sold", async () => {
//     const petStatus = await petStore.getPetByStatus("sold");
//     expect(petStatus.status).toEqual(200);
//   });

//   test("Добавить питомца", async () => {
//     const pet = await petStore.create(newPet);
//     expect(pet.status).toEqual(200);
//   });

//   test("Обновить запись о питомце", async () => {
//     const pet = await petStore.update(updatePet);
//     expect(pet.status).toEqual(200);
//   });

//   test("Удалить питомца", async () => {
//     await petStore.create(newPet);
//     const petDelete = await petStore.delete(333);
//     expect(petDelete.status).toEqual(200);
//   });
// });
