const axios = require("axios");
import { config } from "../../config.js";

const user = {
  login: (payload) => {
    return axios.post(`${config.url}/auth`, {
      headers: {
        "Content-Type": "application/json",
      },
      body: {
        payload,
      },
    });
  },
};

export { user };
