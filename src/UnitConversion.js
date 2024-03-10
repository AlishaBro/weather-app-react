import React, { useState } from "react";
import './UnitConversion.css';




export default function UnitConversion(props) {
    
    const [unit, setUnit] = useState("celcius");
    
    function showFarenheit(event) {
        
        event.preventDefault();
        setUnit("farenheit")
       

    }

      function showCelcius(event) { 
        event.preventDefault();
        setUnit("celcius");
      }
    
    function ConvertToFarenheit() { 
        return Math.round((props.temperature * 9 / 5) + 32);
    }
    
  
   

    if (unit === "celcius") {
        return (
            <div className="UnitConversion">
                <span className="temperature">{Math.round(props.temperature)}{""} </span>
                <span className="units">°C|
                    <a href='/' onClick={showFarenheit}>°F</a>
                </span>
            </div>
        )
    } else
        
        return ( <div className="UnitConversion">
            <span className="temperature">{ConvertToFarenheit()}{""} </span>
                <span className="units"><a href='/' onClick={showCelcius}>°C </a>|
                °F
                </span>
            </div>)
    
    
    
        
  
    
    } 
      


  