import React from "react";
import './DisplayForecast.css'
import AnimatedWeatherIcon from "./AnimatedWeatherIcon";

export default function ForecastDay(props) { 
    let icon = props.data.weather[0].icon;
    
    function ForecastMaxTemp() { 
        let maxTemp = Math.round(props.data.temp.max);
        return maxTemp;
    }

      function ForecastMinTemp() { 
        let minTemp = Math.round(props.data.temp.min);
        return minTemp;
      }
    
    
    let days = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];
    let day = new Date(props.data.dt * 1000);
    let dayOftheweek=days[day.getDay()];
    return (
        <div>
            <div className="ForecastDay">{dayOftheweek}</div>        
                <div>
                    <AnimatedWeatherIcon icon={icon} size={32} />
                </div>
            <div>
                <span className="ForecastMaxTemp">{ForecastMaxTemp()}°</span><span className="ForecastMinTemp">{ForecastMinTemp()}°</span>
            </div>
        </div>
    )
}