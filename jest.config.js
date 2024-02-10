module.exports = {
  reporters: [
    "default",
    [
      "./jest-html-reporter",
      {
        pageTitle: "Test Report",
      },
    ],
    "jest-allure",
  ],
  testRunner: "jest-jasmine2",
  setupFilesAfterEnv: ["jest-allure/dist/setup"],
};
