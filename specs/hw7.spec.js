// //Работаю с https://restful-booker.herokuapp.com
// import { user } from "../framework/services/users.js";
// import { booking } from "../framework/services/booking.js";
// import { config } from "../config.js";

// describe("5 API-тестов на сервис бронирования", () => {
//   test("Авторизация", async () => {
//     const payload = config.credentials;
//     const res = await user.login(payload);
//     expect(res.status).toEqual(200);
//   });

//   test("Получить список записей", async () => {
//     const res = await booking.get();
//     expect(res.status).toEqual(200);
//   });

//   test("Добавить запись", async () => {
//     const payload = {
//       firstname: "Jim",
//       lastname: "Brown",
//       totalprice: 111,
//       depositpaid: true,
//       bookingdates: {
//         checkin: "2018-01-01",
//         checkout: "2019-01-01",
//       },
//       additionalneeds: "Breakfast",
//     };
//     const res = await booking.create(payload);
//     expect(res.status).toEqual(200);
//   });

//   test("Обновить ФИО в записи", async () => {
//     const payload = {
//       firstname: "Jim",
//       lastname: "Brown",
//       totalprice: 333,
//       depositpaid: true,
//       bookingdates: {
//         checkin: "2023-01-01",
//         checkout: "2024-01-01",
//       },
//       additionalneeds: "Breakfast",
//     };
//     const res = await booking.update(1, payload);
//     expect(res.status).toEqual(200);
//   });

//   test("Удалить запись", async () => {
//     const res = await booking.delete(1);
//     expect(res.status).toEqual(201);
//   });
// });
