const axios = require("axios");
import config_Petstore from "../../config.js";
const { url } = config_Petstore;

export const user = {
  login: (payload) => {
    return axios.post(`${url}/auth`, {
      headers: {
        "Content-Type": "application/json",
      },
      body: {
        payload,
      },
    });
  },
};

export default user;
