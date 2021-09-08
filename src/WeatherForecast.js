import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
  function handleResponse(response) {
    console.log(response);
  }

  let apiKey = `ff39a1560b2a6b58581393d9865ab25f`;
  let latitude = props.coordinates.lat;
  let longitude = props.coordinates.lon;
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(handleResponse);
  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="WeatherForecast-Day">Thu</div>
          <WeatherIcon code="01d" size={40} />
          <div className="WeatherForecast-Temps">
            <span className="WeatherForecast-Min">19</span> |{" "}
            <span className="WeatherForecast-Max">26</span>
          </div>
        </div>
      </div>
    </div>
  );
}
