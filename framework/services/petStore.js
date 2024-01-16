const axios = require("axios");
import { config_Petstore } from "../../config.js";

const petStore = {
  getPetByStatus: (status) => {
    return axios.get(
      `${config_Petstore.url_Petstore}/pet/findByStatus?status=${status}`,
      {
        headers: {
          accept: "application/json",
        },
      },
    );
  },

  getPetById: (petId) => {
    return axios.get(`${config_Petstore.url_Petstore}/pet/${petId}`, {
      headers: {
        accept: "application/json",
      },
    });
  },

  create: (payload) => {
    return axios.post(`${config_Petstore.url_Petstore}/pet`, {
      headers: {
        accept: "application/json",
        "Content-Type": "application/json",
      },
      body: { payload },
    });
  },

  update: async (payload) => {
    return axios.put(`${config_Petstore.url_Petstore}/pet`, {
      headers: {
        accept: "application/json",
        "Content-Type": "application/json",
      },
      body: { payload },
    });
  },

  delete: (id) => {
    return axios.delete(`${config_Petstore.url_Petstore}/pet/${id}`, {
      headers: {
        accept: "application/json",
        "Content-Type": "application/json",
      },
    });
  },
};

export { petStore };
