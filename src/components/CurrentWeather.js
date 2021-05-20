import WeatherIcon from './WeatherIcon';

export default function CurrentWeather( {city, data} ) {

    const { temp, weather, dt} = data;
    const {icon, main} = weather[0];

    const date = new Date(dt * 1000);
    const time = date.getHours() + ":" + date.getMinutes();

    return (
        <div className='glass-container col-sm-8'>            
            <div className="current-weather">
                <div className="row">
                    <div className="col-sm-12">
                        <h5 className="font-weight-bold">{city} Weather</h5>
                        <span class="time">As of {time}</span>
                        <div className="row align-items-center">
                            <div className="col-8">
                                <h1 class="font-weight-bold">{temp}°C</h1>
                            </div>
                            <div className="col-4">
                                <WeatherIcon iconName={icon} size={5}/>
                            </div>
                        </div>
                        <p class="font-weight-bold">{main}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}