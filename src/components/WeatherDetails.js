import WeatherIcon from './WeatherIcon';
import { WiRaindrop } from 'react-icons/wi';
import { BiWind, BiUpArrowAlt, BiSun } from 'react-icons/bi';
import { BsDropletHalf, BsArrowsCollapse } from 'react-icons/bs';
import { FiNavigation2 } from 'react-icons/fi';

export default function WeatherDetails ({data, hide = f => f}){
    
    if(!data)
        return null;
    
    const {icon,} = data.weather[0];
    const rain = parseInt(data.pop*100)
    
    return (
        <div className="weather-detail glass-container">
            <div className="row justify-content-center">
                <div className="col-md-">
                
                    <p><span className="font-weight-bold">Fri 16 </span>| Day</p>
                    <div className="row align-items-center">
                        <div className="col-auto pl-0 pr-3">
                            <h1 className="font-weight-bold">{data.temp.day}°</h1>
                        </div>
                        <div className="col-auto p-0">
                            <WeatherIcon iconName={icon} size={5}/>
                        </div>
                        <div className="col-auto pl-3">
                            <p><WiRaindrop className="icon" size={25}/>{rain}%</p>
                            <p className="pl-1"><BiWind size={25}/> {data.wind_speed}</p>
                        </div>
                    </div>
                    
                    <div className="table-responsive mt-3 mb-3">
                        <table class="table">
                            <tbody>
                                <tr>
                                    <td><BsDropletHalf /> Humidity</td>
                                    <td>{data.humidity}%</td>
                                </tr>
                                <tr>
                                    <td><BsArrowsCollapse /> Pressure</td>
                                    <td>{data.pressure} mb</td>
                                </tr>
                                <tr>
                                    <td><BiWind /> Wind</td>
                                    <td>
                                        <FiNavigation2 style={{"transform": `rotate(${data.wind_deg}deg)`}}/> 
                                        {data.wind_speed} km/h
                                    </td>
                                </tr>
                                <tr>
                                    <td><BiSun /> UV Index</td>
                                    <td>{data.uvi}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className='mb-3 d-flex justify-content-center align-items-center'>
                        <button className="btn" onClick={hide}>
                            <BiUpArrowAlt size={25}/>
                        </button>
                    </div>
                </div>                    
            </div>
        </div>
    )
}