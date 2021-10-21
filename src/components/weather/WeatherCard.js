
const WeatherCard = ({data}) => {
    let date = new Date();
    let hour = date.getHours();
    console.log(`current time: ${hour}`);

    return (
        <>
            <div className="weather--location"><i className="fas fa-map-marker-alt"></i>{data.name}</div>
            <h3>Current Conditions</h3>
            <div className="weather--current">
                <span className="weather--temp-main">{Math.round(data.main.temp)}&deg;</span>
                <span className="weather--temp-high">/{Math.round(data.main.temp_max)}&deg;</span>
                <span className="weather--avatar">
                    {data.weather[0].main === "Clouds" ? <i className="fas fa-cloud fa-2x"></i> 
                    : data.weather[0].main === "Clear" && hour <= 18 ? <i className="fas fa-sun fa-2x"></i>
                    : data.weather[0].main === "Clear" && hour > 18 ? <i className="fas fa-moon fa-2x"></i>
                    : data.weather[0].main === "Mist" || data.weather[0].main === "Rain" ? <i className="fas fa-cloud-rain fa-2x"></i>
                    : data.weather[0].main ==="Haze" ? <i className="fas fa-smog fa-2x"></i>
                    : "" }
                </span>
                
            </div>
            <div className="weather--current-condition">{data.weather[0].main}</div>
            <div className="weather--details">
                <span className="weather--details-label">Feels Like:</span>
                <span className="weather--details-value">{Math.round(data.main.feels_like)}&deg;</span>
            </div>
            <div className="weather--details">
                <span className="weather--details-label">Humidity:</span>
                <span className="weather--details-value">{data.main.humidity}&#37;</span>
            </div>
            <div className="weather--details">
                <span className="weather--details-label">Wind:</span>
                <span className="weather--details-value">{Math.round(data.wind.speed)}mph</span>
            </div>
        </>
    )
}

export default WeatherCard