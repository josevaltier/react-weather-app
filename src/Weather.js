import React from "react";
import "./Weather.css";

export default function Weather() {
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

      <h1>Barcelona</h1>
      <h3>Wednesday, August 25th</h3>

      <div className="row">
        <div className="col-12 currentWeather">
          <img src="./sunny.png" alt="sunny" />{" "}
          <span>
            <span className="mainTemp">30</span>
            <span className="unit">ºC</span>
          </span>
        </div>
      </div>
      <div className="minMaxTemp">Min 23ºC | Max 30ºC</div>
      <div className="row mt-3">
        <div className="col-5 humidity">Humidity: 50%</div>
        <div className="col-5 wind">Wind: 3 km/h</div>
      </div>
    </div>
  );
}
