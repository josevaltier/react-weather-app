import React from "react";
import FormattedDate from "./FormattedDate.js";
import WeatherIcon from "./WeatherIcon.js";
import MainTemperature from "./MainTemperature.js";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1>{props.data.city}</h1>
      <FormattedDate date={props.data.date} />
      <strong className="text-capitalize description">
        {props.data.description}
      </strong>

      <div className="row">
        <div className="col-12 currentWeather">
          <WeatherIcon code={props.data.icon} />
          <span>
            <MainTemperature celsius={props.data.temperature} />
          </span>
        </div>
      </div>
      <div className="minMaxTemp">
        Min {Math.round(props.data.minTemp)}ºC | Max{" "}
        {Math.round(props.data.maxTemp)}ºC
      </div>
      <div className="row mt-3">
        <div className="col-5 humidity">Humidity: {props.data.humidity}%</div>
        <div className="col-5 wind">Wind: {props.data.wind} km/h</div>
      </div>
    </div>
  );
}
