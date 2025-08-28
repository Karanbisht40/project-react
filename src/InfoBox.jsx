// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Typography from '@mui/material/Typography';
// import ThunderstormIcon from "@mui/icons-material/Thunderstorm";
// import AcUnitIcon from "@mui/icons-material/AcUnit";
// import WbSunnyIcon from "@mui/icons-material/WbSunny";
// import "./InfoBox.css";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import './InfoBox.css';

export default function InfoBox({ info }) {

    const INIt_URL =
        "https://images.unsplash.com/photo-1545134969-8debd725b007?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGR1c3R5JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D"

    const HOT_URL = "https://images.unsplash.com/photo-1493936734716-77ba6da66365?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGhvdCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";
    const COLD_URL = "https://images.unsplash.com/photo-1674407866481-a39b2239f771?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y29sZCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";
    const RAIN_URL = "https://images.unsplash.com/photo-1438449805896-28a666819a20?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmFpbiUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";

    return (
        <div className="InfoBox">

            <div className="Cardcontainer">
                <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                        // sx={{ height: 140 }}
                        component="img"
                        alt = "green iguana"
                        height="140"
                        image={info.humidity > 80 ?
                            RAIN_URL :
                            info.temp > 15 ?
                                HOT_URL : COLD_URL}
                        title="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {info.city}
                            {info.humidity > 80 ? 
                                <ThunderstormIcon/>
                             : info.temp > 15 ? 
                                <WbSunnyIcon/>
                             : 
                                <AcUnitIcon/>
                            }
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
                            <p>Temprature : {info.temp}&deg;C</p>
                            <p>Minimum temprature: {info.tempMin}&deg;C</p>
                            <p>Maximum temprature :{info.tempMax}&deg;C</p>
                            <p>humidity : {info.humidity}</p>
                            <p>{`weather is ${info.weather} but feels like ${info.feels_like}`}&deg;C</p>
                        </Typography>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}
