import React, { useEffect, useState } from "react";
import bgI from "../../asset/weatherbg.jpg";
import "./landing.style.css";
import { useNavigate } from "react-router-dom";
import Card from "../../Components/Card/Card";
import {
  getLocation,
  getWeatherAltitude,
  getdefaultWeather,
} from "./landingPage.actions";

function LandingPage({ city, setCity }) {
  const [defaultWeather, setDefaultWeather] = useState({});
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [position, setPosition] = useState({});

  const style = {
    backgroundImage: `url(${bgI})`,
    backgroundSize: "cover",
  };
  useEffect(() => {
    getdefaultWeather({ setDefaultWeather, setLoading, city });
  }, []);

  useEffect(() => {
    // console.log("location fixed");
    getWeatherAltitude({ setDefaultWeather, position, setLoading });
  }, [position]);

  return (
    <div style={style} className="container">
      <div className="top">
        <h2 className="title">Weather Forecast</h2>
        <div className="input-box">
          <input
            className="search-box"
            placeholder="search city"
            type="text"
            name=""
            id=""
            onChange={(e) => setCity(e.target.value)}
          />

          <button onClick={() => navigate("/Dashboard")} className="btn">
            Search
          </button>
        </div>
      </div>

      <h3 style={{ color: "wheat" }}>Or</h3>
      <button className="btn" onClick={() => getLocation({ setPosition })}>
        Get weather for your place
      </button>

      {loading ? (
        "Loading"
      ) : (
        <>
          <h2>{defaultWeather?.name}</h2>
          <Card defaultWeather={defaultWeather} />
        </>
      )}
    </div>
  );
}

export default LandingPage;
