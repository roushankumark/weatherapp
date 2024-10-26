// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Typography from '@mui/material/Typography';
// import "./InfoBox.css";
// import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
// import AcUnitIcon from '@mui/icons-material/AcUnit';
// import LightModeIcon from '@mui/icons-material/LightMode';

// export default function InfoBox( info ) {
//     const INIT_URL = 
//     "https://images.unsplash.com/photo-1601134467661-3d775b999c8b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8d2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D"

//     let HOT_URL = "https://images.unsplash.com/photo-1628134785730-0476293bf596?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c3VtbWVyJTIwc2Vhc29ufGVufDB8fDB8fHww";
//     let COLD_URL = "https://plus.unsplash.com/premium_photo-1670963965022-59c9ac468c18?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8d2ludGVyJTIwc2Vhc29ufGVufDB8fDB8fHww";
//     let RAIN_URL = "https://plus.unsplash.com/premium_photo-1664910346493-e34247942295?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fHJhaW55JTIwc2Vhc29ufGVufDB8fDB8fHww";

//     return (
//         <div className="InfoBox">
//         <div className='carContainer'>
//         <Card sx={{ maxWidth: 345 }}>
//         <CardMedia
//           sx={{ height: 140 }}
//           image={
//             info.humidity > 80 
//             ? RAIN_URL 
//             : info.temp > 15
//             ? HOT_URL
//             : COLD_URL
//           }
//           title="green iguana"
//         />
//         <CardContent>
//           <Typography gutterBottom variant="h5" component="div">
//             {info.city} {
//             info.humidity > 80 
//             ? <ThunderstormIcon/>
//             : info.temp > 15
//             ? <LightModeIcon/>
//             : <AcUnitIcon/>
//           }
//           </Typography>
//           <Typography variant="body2" color="text.secondary" component={"span"}>
//             <p>Temperature = {info.temp}&deg;C</p>
//             <p>Humidity = {info.humidity}&deg;C</p>
//             <p>Min Temperature = {info.tempMin}&deg;C</p>
//             <p>Max Temperature = {info.tempMax}&deg;C</p>
//             <p>The weather can be described as{info.weather} and feels like {info.feelslike}&deg;C</p>
//           </Typography>
//         </CardContent>
//       </Card>
//       </div>
//         </div>
//     );
// }


import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import "./InfoBox.css";
import ThunderstormIcon from "@mui/icons-material/Thunderstorm";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import LightModeIcon from "@mui/icons-material/LightMode";

export default function InfoBox({ info }) {
  const INIT_URL =
    "https://images.unsplash.com/photo-1601134467661-3d775b999c8b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8d2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";

  let HOT_URL =
    "https://images.unsplash.com/photo-1628134785730-0476293bf596?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c3VtbWVyJTIwc2Vhc29ufGVufDB8fDB8fHww";
  let COLD_URL =
    "https://plus.unsplash.com/premium_photo-1670963965022-59c9ac468c18?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8d2ludGVyJTIwc2Vhc29ufGVufDB8fDB8fHww";
  let RAIN_URL =
    "https://plus.unsplash.com/premium_photo-1664910346493-e34247942295?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fHJhaW55JTIwc2Vhc29ufGVufDB8fDB8fHww";

  return (
    <div className="InfoBox">
      <div className="carContainer">
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            sx={{ height: 140 }}
            image={
              info.humidity > 80
                ? RAIN_URL
                : info.temp > 15
                ? HOT_URL
                : COLD_URL
            }
            title="Weather Image"
          />

<CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {info.city}{" "}
              {info.humidity > 80 ? (
                <ThunderstormIcon />
              ) : info.temp > 15 ? (
                <LightModeIcon />
              ) : (
                <AcUnitIcon />
              )}
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              component={"span"}
            >
              <p>Temperature: {info.temp}&deg;C</p>
              <p>Feels Like: {info.feelslike}&deg;C</p>
              <p>Min Temperature: {info.tempMin}&deg;C</p>
              <p>Max Temperature: {info.tempMax}&deg;C</p>
              <p>Humidity: {info.humidity}%</p>
              <p>Weather: {info.weather}</p>
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}