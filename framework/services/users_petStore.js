const axios = require("axios");
import { url } from "../../config.js";

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
