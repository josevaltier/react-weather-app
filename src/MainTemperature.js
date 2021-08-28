import React, { useState } from "react";

export default function MainTemperature(props) {
  const [unit, setUnit] = useState("celsius");
  function showFah(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }
  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  if (unit === "celsius") {
    return (
      <span className="MainTemperature">
        <span className="mainTemp">{Math.round(props.celsius)}</span>
        <span className="unit">
          ºC |{" "}
          <a href="/" onClick={showFah}>
            ºF
          </a>
        </span>
      </span>
    );
  } else {
    let fahrenheit = (props.celsius * 9) / 5 + 32;
    return (
      <span className="MainTemperature">
        <span className="mainTemp">{Math.round(fahrenheit)}</span>
        <span className="unit">
          <a href="/" onClick={showCelsius}>
            ºC
          </a>{" "}
          | ºF
        </span>
      </span>
    );
  }
}
