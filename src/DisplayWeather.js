import React from "react";
import FormatDate from "./FormatDate";
import AnimatedWeatherIcon from "./AnimatedWeatherIcon"

export default function DisplayWeather(props) { 
    return (
    <div className="DisplayWeather">
        <h1>{props.data.place}</h1>
                 <div className="row ">
                     <div className="col-4 d-flex float-left">
                        <div className="canvas">
                        {/* <img src={props.data.icon} alt="cloudy" /> */}
                        <AnimatedWeatherIcon icon={props.data.icon }/>
                      </div>
                      <div>
                          <span className="temperature">{Math.round(props.data.temperature)}{""} </span><span className="units">°C|°F</span>
                      </div>
                  </div>
                  <div className="col-4">
                      <ul>
                          <li>
                              Feels like: {Math.round(props.data.feelsLike)}°C
                          </li>
                          <li>
                              Humidity: {props.data.humidity}%
                          </li>
                          <li>
                              Wind: {Math.round(props.data.wind)}Km/hr
                          </li>
                      </ul>
    
                  </div>
                  <div className="col-4">
                      <ul>
                          <li>
                            <FormatDate data={props.data.date} />
                          </li>
                          <li className="text-capitalize"> 
                              {props.data.description}
                          </li>
                      </ul>
                
                  </div>
                
              </div>
        </div> 
    )
}