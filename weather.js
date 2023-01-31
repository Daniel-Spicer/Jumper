import axios from "axios";

export function getWeather(lat, long, timezone) {
    return axios.get("https://api.open-meteo.com/v1/forecast?&hourly=apparent_temperature&timeformat=unixtime", {
        params: { 
            latitude: lat, 
            longitude: long, 
            timezone
        },
    } 
 ).then(({ data }) => {
    let weather
    if (data.hourly.apparent_temperature[0] < 20) {
        weather = "Currently: You need to wear a jumper!"
    } else {
        weather = "Currently: You don't need to wear a jumper!"
    }
    document.getElementById("app").innerHTML = weather;
    if (data.hourly.apparent_temperature[1] < 20) {
        weather = "You need to wear a jumper!"
    } else {
        weather = "You don't need to wear a jumper!"
    }
    document.getElementById("onehr").innerHTML = weather;
    if (data.hourly.apparent_temperature[2] < 20) {
        weather = "You need to wear a jumper!"
    } else {
        weather = "You don't need to wear a jumper!"
    }
    document.getElementById("twohr").innerHTML = weather;
    if (data.hourly.apparent_temperature[3] < 20) {
        weather = "You need to wear a jumper!"
    } else {
        weather = "You don't need to wear a jumper!"
    }
    document.getElementById("threehr").innerHTML = weather;
    if (data.hourly.apparent_temperature[4] < 20) {
        weather = "You need to wear a jumper!"
    } else {
        weather = "You don't need to wear a jumper!"
    } 
    document.getElementById("fourhr").innerHTML = weather;
    
}

    ) 
}

