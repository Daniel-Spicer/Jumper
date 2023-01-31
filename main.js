
import { getWeather } from './weather.js'
// import 'animate.css';

navigator.geolocation.getCurrentPosition(positionSuccess, positionError,{timeout:10000})

function positionSuccess({ coords }) {
    getWeather(
        coords.latitude, 
        coords.longitude, 
        Intl.DateTimeFormat().resolvedOptions().timeZone,
        // console.log(Intl.DateTimeFormat().resolvedOptions().timeZone)
        // ).then()
    // .catch(alert("error getting weather"))
)}

function positionError() {
    alert("There was an error getting your location. Please check your location settings.")
}


