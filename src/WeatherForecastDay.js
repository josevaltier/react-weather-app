import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {
  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return days[day];
  }
  function minTemp() {
    let minTemp = Math.round(props.data.temp.min);
    return `${minTemp}º`;
  }

  function maxTemp() {
    let maxTemp = Math.round(props.data.temp.max);
    return `${maxTemp}º`;
  }
  return (
    <div className="WeatherForecastDay">
      <div className="col">
        <div className="WeatherForecast-Day">{day()}</div>
        <WeatherIcon code={props.data.weather[0].icon} size={40} />
        <div className="WeatherForecast-Temps">
          <span className="WeatherForecast-Min">{minTemp()}</span> |{" "}
          <span className="WeatherForecast-Max">{maxTemp()}</span>
        </div>
      </div>
    </div>
  );
}
