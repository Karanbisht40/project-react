import { useState } from "react";
import InfoBox from "./InfoBox";
import SearchBox from "./SearchBox";


export default function WeatherApp(){
   const[weatherInfo, setWeatherInfo]=useState({
       city: "Mumbai ",
       feels_like: 24.5,
       temp:25.02,
       tempMin : 25.2,
       humidity: 47,
       weather: "haze",
   });

   let updateInfo = (newInfo)=>{
       setWeatherInfo(newInfo);
   }

    return(
        <div style={{textAlign : "center"}}>
            <h2>weather app </h2>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={weatherInfo}/>
        </div>
    )
}