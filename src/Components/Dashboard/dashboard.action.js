import "./dashBoard.style.css";
import axiosInstnace from "../../utils/axios";
export async function getdefaultWeather({
  setDefaultWeather,
  setLoading,
  city,
}) {
  try {
    const response = await axiosInstnace.get(`/weather?q=${city},india`);
    console.log("weather", response.data);
    setDefaultWeather(response);
    setLoading(false);
  } catch (error) {
    console.log("error", error);
  }
}
