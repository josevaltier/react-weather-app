import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";
import FormattedDate from "./FormattedDate.js";

export default function Weather() {
  const [weatherData, setWeatherData] = useState({ ready: false });

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      city: response.data.name,
      description: response.data.weather[0].description,
      date: new Date(response.data.dt * 1000),
    });
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form>
          <input
            type="search"
            placeholder="Where to?"
            autoFocus="on"
            className="searchBox"
          />
          <input type="submit" value="Go!" className="searchButton" />
          <input type="submit" value="📍" className="locateMeButton" />
        </form>

        <h1>{weatherData.city}</h1>
        <FormattedDate date={weatherData.date} />
        <strong className="text-capitalize description">
          {weatherData.description}
        </strong>

        <div className="row">
          <div className="col-12 currentWeather">
            <img
              src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
              alt={weatherData.description}
            />
            <span>
              <span className="mainTemp">
                {Math.round(weatherData.temperature)}
              </span>
              <span className="unit">ºC</span>
            </span>
          </div>
        </div>
        <div className="minMaxTemp">Min 23ºC | Max 30ºC</div>
        <div className="row mt-3">
          <div className="col-5 humidity">
            Humidity: {weatherData.humidity}%
          </div>
          <div className="col-5 wind">Wind: {weatherData.wind} km/h</div>
        </div>
      </div>
    );
  } else {
    const apiKey = "ff39a1560b2a6b58581393d9865ab25f";
    let city = "London";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
    return "Loading...";
  }
}
