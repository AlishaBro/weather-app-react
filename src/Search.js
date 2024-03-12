import React, { useState } from "react";
import DisplayWeather from "./DisplayWeather";
import DisplayForecast from "./DisplayForecast";
import axios from "axios";
import "./App.css";




export default function Search() {

    const [weatherData, setweatherData] = useState({ ready: false });
    let [city, setCity] = useState(null);
    // let [message, setMessage] = useState(null);

  

    function handleUpdate(event) {
        event.preventDefault();
        setCity(event.target.value)

    }


    function handleSubmit(event) {
        event.preventDefault();
        if (city) {
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=5354b60afda2b7800186c06153932396&units=metric`;
            console.log("calling api")
            
            axios.get(url).then(handlResponse)
            
        }
    }

    function handlResponse(response) {
        console.log("here")
        console.log(response)

      
            setweatherData({
                ready: true,
                coordinates: response.data.coord,
                temperature: response.data.main.temp,
                date: new Date(response.data.dt * 1000),
                icon: response.data.weather[0].icon,
                humidity: response.data.main.humidity,
                wind: response.data.wind.speed,
                feelsLike: response.data.main.feels_like,
                description: response.data.weather[0].description,
                place: response.data.name,
            })
          
    }
   
    if (weatherData.ready) {
        return (
            <div className="Search">
            
                <form className="row" onSubmit={handleSubmit}>
                    <div className="col-9">
                        <input type="text" placeholder="Enter the city" autoFocus="on" required="on" className="form-control" onChange={handleUpdate}></input>
                    </div>
                    <div className="col-3">
                
                        <input type="submit" value="search" className="btn search-btn w-100"></input>
                    </div>
                </form>

                <DisplayWeather data={weatherData} />
                <DisplayForecast coordinates={weatherData.coordinates} />
           
            </div>
        )
    }
    
        else {
            let city = "New york";
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=5354b60afda2b7800186c06153932396&units=metric`;
            axios.get(url).then(handlResponse);
            return "Loading...";
        }
}
    

