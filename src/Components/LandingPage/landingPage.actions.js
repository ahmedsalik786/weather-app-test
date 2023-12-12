import axios from "axios";

export function getLocation({ setPosition }) {
  navigator.geolocation.getCurrentPosition(
    (position) => {
      setPosition({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
      });
      console.log(
        "coord->",
        position.coords.latitude,
        position.coords.longitude
      );
    },
    (error) => {
      console.log("error", error);
    }
  );
}

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

export async function getdefaultWeather({
  setDefaultWeather,
  setLoading,
  city,
}) {
  try {
    const response = await weatherAPI.get(`/weather?q=${city},india`);
    console.log("weather", response);

    setDefaultWeather(response);
    setLoading(false);
  } catch (error) {
    console.log("error", error);
  }
}
