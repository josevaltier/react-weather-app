import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <form>
        <input type="search" placeholder="Type a city name..." />
        <input type="submit" value="Go!" />
        <input type="submit" value="📍" />
      </form>

      <h1>Barcelona</h1>
      <h3>Wednesday, August 25th</h3>

      <div className="row">
        <div className="col-6">
          <img src="./sunny.png" /> <span>30ºC</span>
        </div>
      </div>
      <div>Min 23ºC | Max 30ºC</div>
      <div className="row">
        <div className="col-3">Humidity: 50%</div>
        <div className="col-3">Wind: 3 km/h</div>
      </div>
    </div>
  );
}
