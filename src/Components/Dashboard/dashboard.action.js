import axios from "axios";
import "./style.css";

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

// Response interceptor for handling responses or errors
weatherAPI.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export async function getdefaultWeather({
  setDefaultWeather,
  setLoading,
  city,
}) {
  try {
    const response = await weatherAPI.get(`/weather?q=${city},india`);
    console.log("weather", response.data);
    setDefaultWeather(response);
    setLoading(false);
  } catch (error) {
    console.log("error", error);
  }
}
