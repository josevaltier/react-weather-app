import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  let [city, setCity] = useState(props.defaultCity);
  function handleResponse(response) {
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      city: response.data.name,
      description: response.data.weather[0].description,
      date: new Date(response.data.dt * 1000),
      minTemp: response.data.main.temp_min,
      maxTemp: response.data.main.temp_max,
      icon: response.data.weather[0].icon,
    });
  }
  function search() {
    const apiKey = "ff39a1560b2a6b58581393d9865ab25f";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }
  function updateCity(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div>
        <div className="Weather">
          <form onSubmit={handleSubmit}>
            <input
              type="search"
              placeholder="Where to?"
              autoFocus="on"
              className="searchBox"
              onChange={updateCity}
            />
            <input type="submit" value="Go!" className="searchButton" />
            <input type="submit" value="📍" className="locateMeButton" />
          </form>
          <WeatherInfo data={weatherData} />
        </div>
        <small className="coder">
          This project was coded by{" "}
          <a
            href="https://www.linkedin.com/in/josefina-valtier-031bb2110/"
            target="_blank"
            rel="noreferrer"
          >
            Josefina Valtier
          </a>{" "}
          and it's{" "}
          <a
            href="https://github.com/josevaltier/react-weather-app"
            target="_blank"
            rel="noreferrer"
          >
            open-sourced on Github
          </a>
          .
        </small>
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
