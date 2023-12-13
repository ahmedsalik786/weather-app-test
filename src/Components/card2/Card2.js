import React from "react";
import RoomOutlinedIcon from "@mui/icons-material/RoomOutlined";
import "./card2.style.css";

function Card2({ defaultWeather }) {
  return (
    <div className="bottom-container">
      <div className="left">
        <div className="location">
          <div className="temp">
            <h3>{Math.round(defaultWeather.main.temp)}K</h3>
          </div>
          <div className="icon-loc">
            <RoomOutlinedIcon />
            <h4>{defaultWeather.name}</h4>
          </div>
        </div>
      </div>
      <div className="right">
        <h4 style={{ fontWeight: 800, marginBottom: "1rem" }}>
          Weather Details
        </h4>
        <p>
          <strong>Max Temp:</strong> {Math.round(defaultWeather.main.temp_max)}
          °K
        </p>
        <p>
          <strong>Min Temp:</strong> {Math.round(defaultWeather.main.temp_min)}
          °K
        </p>
        <p>
          <strong>Wind Speed:</strong> {defaultWeather.wind.speed} m/s
        </p>
        <p>
          <strong>Visibility:</strong> {defaultWeather.visibility} meters
        </p>
        <p>
          <strong>Pressure:</strong> {defaultWeather.main.pressure} hPa
        </p>
        <p>
          <strong>Coordinates:</strong> Latitude-{defaultWeather.coord.lat},
          Longitude-{defaultWeather.coord.lon}
        </p>

        <p>
          <strong>City name:</strong> {defaultWeather.name}
        </p>
      </div>
    </div>
  );
}

export default Card2;
