const axios = require("axios");
import { config_Petstore } from "../../config.js";

const petStore = {
  getPetByStatus: (status) => {
    return axios.get(
      `${config_Petstore.url_Petstore}pet/findByStatus?status=${status}`,
      {
        headers: {
          accept: "application/json",
        },
      },
    );
  },

  create: (payload) => {
    return axios.post(`${url_Petstore}/booking`, {
      headers: {
        "Content-Type": "application/json",
      },
      body: { payload },
    });
  },

  update: async (id, payload) => {
    return axios.put(`${url_Petstore}/booking/${id}`, {
      headers: {
        Authorization: "Basic YWRtaW46cGFzc3dvcmQxMjM=",
        "Content-Type": "application/json",
        Cookie: "token=abc123",
      },
      body: { payload },
    });
  },

  delete: (id) => {
    return axios.delete(`${url_Petstore}/booking/${id}`, {
      headers: {
        Authorization: "Basic YWRtaW46cGFzc3dvcmQxMjM=",
        "Content-Type": "application/json",
        Cookie: "token=abc123",
      },
    });
  },
};

export { petStore };
