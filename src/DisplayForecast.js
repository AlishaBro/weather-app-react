import React, { useState, useEffect } from "react";
import "./DisplayForecast.css";

import axios from "axios";
import ForecastDay from "./ForecastDay";

export default function DisplayForecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState();

  function groupByDay(list) {
    const days = {};
    list.forEach((entry) => {
      const date = new Date(entry.dt * 1000).toISOString().split("T")[0];
      if (!days[date]) {
        days[date] = {
          dt: entry.dt,
          weather: entry.weather,
          temps: [entry.main.temp],
        };
      } else {
        days[date].temps.push(entry.main.temp);
        if (new Date(entry.dt * 1000).getHours() === 12) {
          days[date].weather = entry.weather;
        }
      }
    });
    return Object.values(days).map((day) => ({
      dt: day.dt,
      weather: day.weather,
      temp: { max: Math.max(...day.temps), min: Math.min(...day.temps) },
    }));
  }

  function handleResponse(response) {
    setForecast(groupByDay(response.data.list));
    setLoaded(true);
  }
  useEffect(() => {
    setLoaded(false);
  }, [props.coordinates]);

  if (loaded) {
    return (
      <div className="DisplayForecast">
        <div className="row">
          {forecast.map(function (forecastDaily, index) {
            if (index < 5) {
              return (
                <div className="col" key={index}>
                  <ForecastDay data={forecastDaily} />
                </div>
              );
            } else {
              return null;
            }
          })}
        </div>
      </div>
    );
  } else {
    let apiKey = process.env.REACT_APP_WEATHER_KEY;
    let apiurl = `https://api.openweathermap.org/data/2.5/forecast?lat=${props.coordinates.lat}&lon=${props.coordinates.lon}&appid=${apiKey}&units=metric`;
    axios.get(apiurl).then(handleResponse);
    return null;
  }
}
