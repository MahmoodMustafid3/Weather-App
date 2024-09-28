import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css"
import { useState } from 'react';

export default function SearchBox({ updateInfo }) {
    let [city, setCity] = useState("");

    const apiUrl = "http://api.openweathermap.org/data/2.5/weather";

    // Update the API Key
    const apiKey = "API_KEY";

    let getWeatherInfo = async () => {
        let response = await fetch(`${apiUrl}?q=${city}&appid=${apiKey}&units=metric`);
        let jsonResponse = await response.json();
        console.log(jsonResponse);
        let result = {
            city: city,
            temp: jsonResponse.main.temp,
            tempMin: jsonResponse.main.temp_min,
            tempMax: jsonResponse.main.temp_max,
            humidity: jsonResponse.main.humidity,
            feelsLike: jsonResponse.main.feels_like,
            weather: jsonResponse.weather[0].description,
        }
        console.log(result);
        return result;

    }

    let handleCity = (event) => {
        setCity(event.target.value);
    }

    let handleSubmit = async (event) => {
        event.preventDefault();
        console.log(city);
        setCity("");
        let infoResult = await getWeatherInfo();
        updateInfo(infoResult);
    }

    return (
        <div className='SearchBox'>
            <form onSubmit={handleSubmit}>
                <TextField id="city" label="City Name" variant="outlined" required value={city} onChange={handleCity} /> <br /><br />
                <Button variant="contained" type='submit'>Search</Button>
            </form>
        </div>
    )
}