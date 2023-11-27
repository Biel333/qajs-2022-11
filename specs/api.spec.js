// Вариант 2:
// Напишите 5 апи-тестов на любой сервис имеющий публичное АПИ, можно использовать АПИ рабочего проекта.
// Я выбрала это АПИ https://reqres.in/api-docs
//В нем 12 пользователей, создать пользователя не получается, поэтому тест на создание будет негатив

// Кейсы:
// Получить список пользователей
// Создать пользователя (негатив)
// Получить случайного пользователя
// Пользователя с ID=1 зовут George
// Обновить данные пользователя

const axios = require("axios");

async function getAllUsers() {
  const users = await axios.get("https://reqres.in/api/users", {
    headers: {
      "Content-Type": "application/json",
    },
  });
  return users;
}

async function createUser(username, password) {
  const user = await axios.post(
    "https://reqres.in/api/register",
    {
      userName: username,
      password: password,
    },
    {
      headers: {
        "Content-Type": "application/json",
      },
    },
  );
  console.log(user);
  return user;
}

async function getUser(id) {
  const user = await axios.get(`https://reqres.in/api/users/${id}`, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  return user;
}

async function updatesUser(id) {
  const user = await axios.put(`https://reqres.in/api/users/${id}`, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  return user;
}

describe("Напишите 5 апи-тестов на сервис reqres.in", () => {
  test("Получить список пользователей", async () => {
    const response = await getAllUsers();
    expect(response.status).toEqual(200);
  });

  test("Создать пользователя (негатив)", async () => {
    try {
      await createUser("eva", "eva123");
    } catch (error) {
      expect(error.request.res.statusCode).toEqual(400);
      expect(error.message).toBe("Request failed with status code 400");
    }
  });

  test("Получить случайного пользователя", async () => {
    function getRandomUserId(max) {
      return Math.floor(Math.random() * max);
    }
    const userId = getRandomUserId(12);
    const response = await getUser(userId);
    expect(response.status).toEqual(200);
  });

  test("Пользователя с ID=1 зовут George", async () => {
    const response = await getUser(1);
    expect(response.data.data.first_name).toEqual("George");
  });

  test("Обновить данные пользователя", async () => {
    const response = await updatesUser(1);
    const today = new Date();
    const date = today.toISOString();
    expect(response.data.updatedAt).toContain(date.slice(0, -7));
  });
});
