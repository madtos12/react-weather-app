import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";
import Humidity from "./images/humidity.png";
import Wind from "./images/wind.png";

export default function WeatherOverview(props) {
  return (
    <div className="WeatherInfo">
      <h1>{props.data.city}</h1>
      <ul>
        <li className="current-date">
          <FormattedDate date={props.data.date} />
        </li>
        <li className="weather-description">{props.data.description}</li>
      </ul>
      <div className="row mt-3">
        <div className="col-8">
          <div className="clearfix">
            <div className="float-left">
              <WeatherIcon code={props.data.icon} />
            </div>
            <div className="float-left">
              <WeatherTemperature celsius={props.data.temperature} />
            </div>
          </div>
        </div>
        <div className="col-4">
          <ul>
            <li>
              <img className="humidity-icon" src={Humidity} alt="humidity" />
              <span className="humidity">{props.data.humidity}%</span>
            </li>
            <li>
              <img className="wind-icon" src={Wind} alt="wind" />
              <span className="wind">{Math.round(props.data.wind)} km/h</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
