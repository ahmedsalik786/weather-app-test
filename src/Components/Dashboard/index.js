import React, { useEffect, useState } from "react";
import bgI from "../../asset/weatherbg.jpg";
import Card from "../../Components/Card";
import { getdefaultWeather } from "./dashboard.action";
// import { Button } from "@mui/material";
import Button from "../../Components/Button";
import { useNavigate } from "react-router-dom";

function Dashboard({ city }) {
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
      <h2> Weather forcast of {city} </h2>
      {loading ? (
        "Loading"
      ) : (
        <>
          <h5>{defaultWeather.name}</h5>
          <Card defaultWeather={defaultWeather} />

          <Button onClick={() => navigate("/")} text={"Go to Home"} />
        </>
      )}
    </div>
  );
}

export default Dashboard;
