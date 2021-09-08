import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";

export default function WeatherForecast() {
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
        <div className="col">
          <div className="WeatherForecast-Day">Thu</div>
          <WeatherIcon code="01d" size={40} />
          <div className="WeatherForecast-Temps">
            <span className="WeatherForecast-Min">19</span> |{" "}
            <span className="WeatherForecast-Max">26</span>
          </div>
        </div>
        <div className="col">
          <div className="WeatherForecast-Day">Thu</div>
          <WeatherIcon code="01d" size={40} />
          <div className="WeatherForecast-Temps">
            <span className="WeatherForecast-Min">19</span> |{" "}
            <span className="WeatherForecast-Max">26</span>
          </div>
        </div>
        <div className="col">
          <div className="WeatherForecast-Day">Thu</div>
          <WeatherIcon code="01d" size={40} />
          <div className="WeatherForecast-Temps">
            <span className="WeatherForecast-Min">19</span> |{" "}
            <span className="WeatherForecast-Max">26</span>
          </div>
        </div>
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
