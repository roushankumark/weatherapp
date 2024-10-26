import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css";
import { useState } from 'react';

export default function SearchBox({ updateinfo }) {
    let [city, setCity] = useState("");
    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "35b69171b172c9f1b7e1f9582072be56";

   let getWeatherInfo = async () => {
    let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}`);
    let jsonResponse = await response.json();
    let result = {
        city: city,
        temp: jsonResponse.main.temp,
        tempMin: jsonResponse.main.temp_min,
        tempMax: jsonResponse.main.temp_max,
        feelsLike: jsonResponse.main.feels_like,
        weather: jsonResponse.weather[0].description,
    };
    console.log(result);
    return result;
   };

   let handChange = (evt) => {
    setCity(evt.target.value);
   };

   let handleSubmit = async (evt) => {
    evt.preventDefault();
    console.log(city);
    setCity(""); 
    let newInfo = await getWeatherInfo();
    updateinfo(newInfo);
   };

    return (
        <div className='SearchBox'>
            <form onSubmit={handleSubmit}>
            <TextField 
              id="city" 
              label="City Name"
              variant="outlined" 
              required 
              value={city}
              onChange={handChange}
              />
            <br/> <br/>
            <br/> <br/>
            <Button variant="contained" type='submit'>Search</Button>
            </form>
        </div>
    );
}





// import TextField from '@mui/material/TextField';
// import Button from '@mui/material/Button';
// import { useState } from 'react';

// export default function SearchBox({ updateWeatherInfo }) {
//     const [city, setCity] = useState(""); // State for storing city input
//     const API_URL = "https://api.openweathermap.org/data/2.5/weather";
//     const API_KEY = "35b69171b172c9f1b7e1f9582072be56";

//     // Function to fetch weather information from API
//     const getWeatherInfo = async () => {
//         try {
//             const response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}`);
//             if (!response.ok) {
//                 throw new Error('Network response was not ok');
//             }
//             const jsonResponse = await response.json();
//             const result = {
//                 city: jsonResponse.name,
//                 temp: jsonResponse.main.temp,
//                 tempMin: jsonResponse.main.temp_min,
//                 tempMax: jsonResponse.main.temp_max,
//                 feelslike: jsonResponse.main.feels_like,
//                 weather: jsonResponse.weather[0].description,
//                 humidity: jsonResponse.main.humidity,
//             };
//             console.log(result);
//             return result;
//         } catch (error) {
//             console.error('Error fetching data:', error);
//             return null;
//         }
//     };

//     // Handle input change
//     const handleChange = (evt) => {
//         setCity(evt.target.value);
//     };

//     // Handle form submission
//     const handleSubmit = async (evt) => {
//         evt.preventDefault();
//         setCity(""); // Clear city input after submission
//         const newInfo = await getWeatherInfo();
//         if (newInfo) {
//             updateWeatherInfo(newInfo); // Update weather information in parent component
//         }
//     };

//     return (
//         <div className='SearchBox'>
//             <form onSubmit={handleSubmit}>
//                 <TextField 
//                     id="city" 
//                     label="City Name"
//                     variant="outlined" 
//                     required 
//                     value={city}
//                     onChange={handleChange}
//                 />
//                 <br/><br/>
//                 <Button variant="contained" type='submit'>Search</Button>
//             </form>
//         </div>
//     );
// }