const axios = require("axios");
import config from "../../config.js";
const { url } = config;

const booking = {
  get: () => {
    return axios.get(`${url}/booking`, {
      headers: {
        "Content-Type": "application/json",
      },
    });
  },

  create: (payload) => {
    return axios.post(`${url}/booking`, {
      headers: {
        "Content-Type": "application/json",
      },
      body: { payload },
    });
  },

  update: async (id, payload) => {
    return axios.put(`${url}/booking/${id}`, {
      headers: {
        Authorization: "Basic YWRtaW46cGFzc3dvcmQxMjM=",
        "Content-Type": "application/json",
        Cookie: "token=abc123",
      },
      body: { payload },
    });
  },

  delete: (id) => {
    return axios.delete(`${url}/booking/${id}`, {
      headers: {
        Authorization: "Basic YWRtaW46cGFzc3dvcmQxMjM=",
        "Content-Type": "application/json",
        Cookie: "token=abc123",
      },
    });
  },
};

export default booking;
