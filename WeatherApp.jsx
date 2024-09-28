import SearchBox from "./SearchBox"
import InfoBox from "./InfoBox"
import { useState } from "react"

export default function WeatherApp() {

    const [weatherInfo, setWeatherInfo] = useState({
        city: "Guwahati",
        temp: 25.05,
        tempMin: 23.07,
        tempMax: 25.05,
        humidity: 47,
        feelsLike: 24.84,
        weather: "haze"
    });

    let updateInfo = (infoResult) => {
        setWeatherInfo(infoResult);

    }

    return (
        <div style={{ textAlign: "center" }}>
            <h1>Weather App</h1>
            <SearchBox updateInfo={updateInfo} />
            <InfoBox info={weatherInfo} />
        </div>
    )
}