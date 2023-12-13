import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import "./card.style.css";

export default function BasicCard({ defaultWeather }) {
  console.log(defaultWeather);
  return (
    <Card className="card-box" sx={{ minWidth: 200, maxWidth: 400 }}>
      <CardContent className="content-box">
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Longitude:{defaultWeather.coord.lon} , Latitude:
          {defaultWeather.coord.lat}
        </Typography>
        <Typography variant="h5" component="div">
          Temperature:{defaultWeather.main.temp} K
        </Typography>
        {/* <Typography sx={{ mb: 1.5 }} color="text.secondary">
          adjective
        </Typography> */}
        <Typography variant="body2">
          Wind Speed:{defaultWeather.wind.speed}
          <br />
        </Typography>
        <Typography variant="body2">
          Pressure:{defaultWeather.main.pressure}
          <br />
        </Typography>
        <Typography variant="body2">
          Humidity:{defaultWeather.main.humidity}
          <br />
        </Typography>
      </CardContent>
      {/* <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions> */}
    </Card>
  );
}
