const axios = require("axios");
import config from "../../config.js";
const { url } = config;

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
