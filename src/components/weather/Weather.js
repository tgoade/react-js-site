import { useState } from "react";
import "./Weather.css";
import WeatherCard from "./WeatherCard";


const Weather = () => {
    const [data, setData] = useState(null);
    const [inputValue, setInputValue] = useState("");
    const [error, setError] = useState(null);
    const [tallImage, setTallImage] = useState(false);

    const submitHandler = (event) => {
        event.preventDefault();
        if(!inputValue) return;
        
        async function fetchData() {
            try {
                const response = await fetch (`https://api.openweathermap.org/data/2.5/weather?q=${inputValue}&appid=962c4aea32503dc445208068e554adfc&units=imperial`)
                if(!response.ok){                                                               
                    throw Error("Could not fetch data for that entry, please check spelling.")
                }                                           // If API fetch is successful, the ok property of the response 
                console.log(response);
                const data = await response.json();
                setData(data);
                setTallImage(true);
                setError(null);
            } catch (error){
                setError(error.message);
                setData(null);
                setTallImage(false);
                return;
            }
            
        };

        fetchData();
    };

    return (
        <div className="weather--container">
            <figure className={`weather--side-image-wrap ${tallImage ? "expand" : ""}`}>
                <img src="images/great-weather.jpg" alt="Weather" className="weather--side-image" />
            </figure>
            <div className="weather--widget">
                <h3>Check Area Weather</h3>
                <div className="weather--user-input">
                    <form onSubmit={submitHandler}>
                        <input type="text" className="weather--city-input" placeholder="Enter City" value={inputValue} onChange={(event) => setInputValue(event.target.value)} />
                        <input type="submit" value="Submit" className="btn--blue" />
                        {error && <div className="weather--input-error">{error}</div>}
                    </form>
                </div>
                {data && <WeatherCard data={data} />}
            </div>
        </div>
    )
    
}

export default Weather