import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./Search.css";
import { useState } from 'react'
import js from '@eslint/js';

export default function SearchBox({ updateInfo }) {
    let [city, setCity] = useState("");
    let[error,setError]= useState(false);
    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "4eca6a355498e6a0b1e092b7593a0438";

    let getWeatherInfo = async () => {
        try {
        let response = await fetch(
            `${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
        let jsonResponse = await response.json();
     //   console.log(jsonResponse);
        let results = {
            city: city,
          temp : jsonResponse.main.temp,
          tempMin: jsonResponse.main.temp_min,
          tempMax : jsonResponse.main.temp_max,
          humidity: jsonResponse.main.humidity,
          feels_like: jsonResponse.main.feels_like,
          weather: jsonResponse.weather[0].description,
        };
        console.log(results);
        return results;
    }catch(error){
        throw error;
    }
    };


    let handleChange = (evt) => {    // to enter into input
        setCity(evt.target.value);
    };

      
    let handleSubmit = async (evt) => {
        try{
        evt.preventDefault();     //to hangle submit
      //  console.log(city);
        setCity("");
        let newInfo = await getWeatherInfo();
        updateInfo(newInfo);
        } catch(error){
            setError(true);
        }
    }
    return (
        <div className="SearchBox">

            <form onSubmit={handleSubmit}>
                <TextField id="outlined-basic" label="city name" variant="outlined" required
                    value={city} onChange={handleChange}
                />
                <br></br>
                <br></br>
                <Button variant="contained" type="submit"> Send</Button>
                {error && <p style={{color : "red"}}>No such Place Exists</p>}
            </form>
        </div>
    )
};
