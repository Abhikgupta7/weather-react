import React from "react";
import "./Forecast.css";

const Forecast = ({ city }) => {
  return (
    <div className="forecast_ontainer">
      <div className="temperature">{city.temperature}°C</div>
      <div className="city">{city.city}</div>
      <div className="humidity_wind_container">
        <div className="humidity">Humidity: {city.humidity}%</div>
        <div className="wind">Wind Speed: {city.wind_speed}Km/hr</div>
      </div>
    </div>
  );
};

export default Forecast;
