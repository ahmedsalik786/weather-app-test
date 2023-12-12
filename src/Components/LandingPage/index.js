import React, { useEffect, useState } from "react";
import bgI from "../../asset/weatherbg.jpg";
import "./style.css";
import { useNavigate } from "react-router-dom";
import Card from "../../Components/Card";
import { getLocation, getdefaultWeather } from "./landingPage.actions";

function LandingPage({ city, setCity }) {
  const [defaultWeather, setDefaultWeather] = useState({});
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [position, setPosition] = useState({ latitude: 0, longitude: 0 });

  const style = {
    backgroundImage: `url(${bgI})`,
    backgroundSize: "cover",
  };
  useEffect(() => {
    getdefaultWeather({ setDefaultWeather, setLoading, city });
  }, []);

  return (
    <div style={style} className="container">
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
      <h3>Or</h3>
      <button className="btn" onClick={() => getLocation({ setPosition })}>
        get your weather
      </button>

      {loading ? (
        "Loading"
      ) : (
        <>
          <h2>{defaultWeather?.name}</h2>
          <Card defaultWeather={defaultWeather} />{" "}
        </>
      )}
    </div>
  );
}

export default LandingPage;
