import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";

export default function WeatherApp() {
    const [weatherInfo, setWeatherInfo] = useState({
            city: "Delhi",
            feelslike: 24.84,
            temp: 25.05,
            temoMin: 25.05,
            tempMax: 25.05,
            humidity: 47,
            weather: "haze",
    });
   
    let updateinfo = (newInfo) => {
        setWeatherInfo(newInfo);
    };

    return (
        <div style={ {textAlign: "center"} }>
            <h2>Weather App by Roushan</h2>
            <SearchBox updateinfo={updateinfo}/>
            <InfoBox info={weatherInfo} /> 
        </div>
    )
}









// import SearchBox from "./SearchBox";
// import InfoBox from "./InfoBox";
// import { useState } from "react";

// export default function WeatherApp() {
//     const [weatherInfo, setWeatherInfo] = useState({
//         city: "Delhi",
//         temp: 25.05,
//         tempMin: 25.05,
//         tempMax: 25.05,
//         humidity: 47,
//         weather: "haze",
//         feelslike: 24.84,
//     });

//     // Function to update weather information
//     const updateWeatherInfo = (newInfo) => {
//         setWeatherInfo(newInfo);
//     };

//     return (
//         <div style={{ textAlign: "center" }}>
//             <h2>Weather App by Roushan</h2>
//             <SearchBox updateWeatherInfo={updateWeatherInfo} />
//             <InfoBox weather={weatherInfo} />
//         </div>
//     );
// }
