const axios = require("axios");
import { config_Petstore } from "../../config.js";

const user = {
  login: (payload) => {
    return axios.post(`${config_Petstore.url}/auth`, {
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
