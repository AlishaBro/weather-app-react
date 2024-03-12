import React, {useState,useEffect } from "react";
import './DisplayForecast.css'

import axios from "axios";
import ForecastDay from "./ForecastDay";

export default function DisplayForecast(props) {
    const [loaded, setLoaded] = useState(false)
    const [forecast, setForecast] = useState();
    function handleResponse(response) {
        setForecast(response.data.daily)
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
                            )
                        } else { 
                            return null;
                        }
                    })}    
                </div>
            </div>
        )
    } else { 
        let apiurl = `https://api.openweathermap.org/data/2.5/onecall?lat=${props.coordinates.lat}&lon=${props.coordinates.lon}&appid=53f3bc1f5d348c44be3e3754c7185573&units=metric`
        axios.get(apiurl).then(handleResponse);
        return null;

    }
}