const axios = require("axios");
import { config } from "../../config.js";

const booking = {
  get: () => {
    return axios.get(`${config.url}/booking`, {
      headers: {
        "Content-Type": "application/json",
      },
    });
  },

  create: (payload) => {
    return axios.post(`${config.url}/booking`, {
      headers: {
        "Content-Type": "application/json",
      },
      body: { payload },
    });
  },

  update: async (id, payload) => {
    return axios.put(`${config.url}/booking/${id}`, {
      headers: {
        Authorization: "Basic YWRtaW46cGFzc3dvcmQxMjM=",
        "Content-Type": "application/json",
        Cookie: "token=abc123",
      },
      body: { payload },
    });
  },

  delete: (id) => {
    return axios.delete(`${config.url}/booking/${id}`, {
      headers: {
        Authorization: "Basic YWRtaW46cGFzc3dvcmQxMjM=",
        "Content-Type": "application/json",
        Cookie: "token=abc123",
      },
    });
  },
};

export { booking };
