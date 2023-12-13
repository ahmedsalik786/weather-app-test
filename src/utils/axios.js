import axios from "axios";

const weatherAPI = axios.create({
  baseURL: "https://api.openweathermap.org/data/2.5",
});

weatherAPI.interceptors.request.use(
  (config) => {
    // Add the API token to the request header or params
    config.params = {
      ...config.params,
      APPID: "d56752efbc1e39c0d37e47f7625983a9",
    };
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

weatherAPI.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default weatherAPI;
