import React from "react";

export default function FormatDate(props) { 
    let days = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];
    let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    let day = days[props.data.getDay()];
    let month = months[props.data.getMonth()];
    let date = [props.data.getDate()];
    if (date < 10) { 
        date=`0${date}`
    }
    return (
        <div>{day}{" "}{date}.{ " "}{month}</div>
)
}