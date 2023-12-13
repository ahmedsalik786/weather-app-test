import React, { useEffect, useState } from "react";
import bgI from "../../asset/weatherbg.jpg";
import { getdefaultWeather } from "./dashboard.action";
import Button from "../../Components/Button/Button";
import { useNavigate } from "react-router-dom";
import Card2 from "../card2/Card2";

function Dashboard({ city, setCity }) {
  const [defaultWeather, setDefaultWeather] = useState({});
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const style = {
    backgroundImage: `url(${bgI})`,
    backgroundSize: "cover",
  };
  console.log(city);
  useEffect(() => {
    getdefaultWeather({ setDefaultWeather, setLoading, city });
  }, []);

  return (
    <div style={style} className="container">
      <h2> Weather forcast</h2>
      {loading ? (
        "Loading"
      ) : (
        <>
          <div className="input-box">
            <input
              className="search-box"
              placeholder="search city"
              type="text"
              name=""
              id=""
              onChange={(e) => setCity(e.target.value)}
            />

            <button
              onClick={() =>
                getdefaultWeather({ setDefaultWeather, setLoading, city })
              }
              className="btn"
            >
              Search
            </button>
          </div>
          <Card2 defaultWeather={defaultWeather} />
          <Button onClick={() => navigate("/")} text={"Go to Home"} />
        </>
      )}
    </div>
  );
}

export default Dashboard;
