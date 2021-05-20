import WeatherIcon from './WeatherIcon';
import WeatherDetails from './WeatherDetails';
import { useReducer, useState } from 'react';
import { WiRaindrop } from 'react-icons/wi'
import { CSSTransition } from 'react-transition-group';
import '../animation.css';


export default function WeatherForecast( {data} ){    
    
    const [showDetails, setShowDetails] = useReducer(showDetails => !showDetails, false);
    const [dayData, setDay] = useState();
    const toggle = (dayData) => {

        setDay(dayData);
        if(!showDetails)
            setShowDetails();
    }

    const renderDay = (dayForecast, i) => {
        
        const icon = dayForecast.weather[0].icon;
        const date = new Date(dayForecast.dt * 1000);
        const dayName = date.toString().split(' ')[0];
        const maxTemp = dayForecast.temp.max;
        const minTemp = dayForecast.temp.min;
        const rainChance = dayForecast.pop ? parseInt(dayForecast.pop * 100) : 0;

        return (
            <div key={i} className="forecast col p-2 text-center" onClick={() => toggle(dayForecast)}>
                <p className="day">{dayName}</p>
                <p className="max-temp m-0 font-weight-bold">{maxTemp}°C</p>
                <p className="min-temp font-weight-bold small">{minTemp}°C</p>
                <WeatherIcon iconName={icon} size={3}/>
                <p className='rain'>
                    <WiRaindrop />
                    <span className="small">{rainChance}%</span>
                </p>
            </div>
        );
    }

    return(
        <>
        <div className="glass-container weather-forecast">
            <div className="row">
                <div className="col-sm-12">  
                    <div className=" p-4">                  
                        <h5 className="font-weight-bold mb-4">Daily Forecast</h5>
                        <div className="row bg-panel"> 
                            {data.map((day, i) => renderDay(day, i))}
                        </div>
                    </div>                    
                </div>
            </div>
        </div>
        <CSSTransition 
            in={showDetails} 
            timeout={500} 
            classNames="node" 
            unmountOnExit
        >
            <WeatherDetails 
                data={dayData} 
                hide={setShowDetails}
            />
        </CSSTransition>
        </>
    )
}