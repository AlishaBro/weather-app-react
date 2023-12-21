import React, { useState } from "react";

import axios from "axios";
import "./App.css"

export default function Search() {

    let [temperature, setTemperature] = useState("");
    let [icon,setIcon]=useState("")
    let [humidity, setHumidity] = useState("");
    let [wind, setWind] = useState("");
    let [feelsLike, setFeelslike] = useState("");
    let [description, setDescription] = useState("");
    let [city, setCity] = useState("");
    let [place, setPlace] = useState("");
    
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=5354b60afda2b7800186c06153932396&units=metric`;
   
    
    function handleUpdate(event) {
        event.preventDefault();
        setCity(event.target.value)

    }
    function handleSubmit(event) {
        event.preventDefault();
        if (city) {
            axios.get(url).then(handlResponse)
            console.log("calling api")
        }     
        
        
        
    }
    
        function handlResponse(response) {
    
        console.log(response.data)
        setTemperature(Math.round(response.data.main.temp));
        setIcon(` https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`)
        setHumidity(response.data.main.humidity);
        setWind(Math.round(response.data.wind.speed));
        setFeelslike(Math.round(response.data.main.feels_like));
        setDescription(response.data.weather[0].description);
            setPlace(response.data.name)
            console.log(response.data.name)

        
     }
    return (
        <div className="Search">
            
            <form className="row" onSubmit={handleSubmit}>
                    <div className="col-9"> 
                    <input type="text" placeholder="Enter the city" autoFocus="on" required="on" className="form-control" onChange={handleUpdate}></input>
                </div>
                <div className="col-3">
                
                    <input type="submit" value="search" className="btn btn-primary search-btn w-100"></input>
                </div>
            </form>
            
            <h1>{place}</h1>
            <div className="row "> 
                <div className="col-4 d-flex">
                    <div>
                        <img src={icon} alt="cloudy" />
                    </div>
                    <div>
                        <span className="temperature">{temperature}{""} </span><span className="units">°C|F</span>
                    </div>
                </div>
                <div className="col-4">
                    <ul>
                        <li>
                            Feels like: {feelsLike}°C
                        </li>
                        <li>
                            Humidity: { humidity}%
                        </li>
                        <li>
                            Wind: { wind}Km/hr
                        </li>
                    </ul>
    
                    </div>
                    <div className="col-4">
                        <ul>
                            <li>
                                Last Updated:Fri 8.Dec
                            </li>
                            <li>
                                { description}
                            </li>
                        </ul>
                
                </div>
                
            </div>
            
        </div>
    )
}