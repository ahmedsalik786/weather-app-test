import axios from "axios";
import axiosInstance from "../../utils/axios";

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

export async function getdefaultWeather({
  setDefaultWeather,
  setLoading,
  city,
}) {
  try {
    const response = await axiosInstance.get(`/weather?q=${city},india`);
    console.log("weather", response);

    setDefaultWeather(response);
    setLoading(false);
  } catch (error) {
    console.log("error", error);
  }
}

export async function getWeatherAltitude({
  setDefaultWeather,
  position,
  setLoading,
}) {
  const { latitude, longitude } = position;
  console.log("lat", latitude, "lon", longitude);

  try {
    const responce = await axiosInstance.get(
      `/weather?lat=${latitude}&lon=${longitude}`
    );
    console.log("responceAlt", responce);
    setDefaultWeather(responce);
    setLoading(false);
  } catch (error) {
    alert(error.message);
  }
}

//https://api.openweathermap.org/data/2.5/weather?lat=1.4&lon=12.5&APPID=d56752efbc1e39c0d37e47f7625983a9
