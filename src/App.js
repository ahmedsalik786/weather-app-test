import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import LandingPage from "./Components/LandingPage";
import Dashboard from "./Components/Dashboard";
import { useState } from "react";

function App() {
  const [city, setCity] = useState("guwahati");

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage  city={city} setCity={setCity} />} />
        <Route path="/dashboard" element={<Dashboard city={city} />}  />
      </Routes>
      </BrowserRouter>
  );
}

export default App;
