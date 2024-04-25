import React, {useContext} from 'react';
import './todays-weather-forecast-hourly.scss';
import TodaysWeatherForecastHourlyComponent from '../todays-w-f-h-component/todays-w-f-h-component';
import { ForecastContext } from '../../Parent/bg-blur/bg-blur'; //


// TodaysWeatherForecastHourly Component
const TodaysWeatherForecastHourly = () => {
    const forecastData = useContext(ForecastContext);
    return (
    <div className="todays-weather-forecast-hourly">
      {forecastData.map((data, index) => (
        <TodaysWeatherForecastHourlyComponent key={index} {...data} />
      ))}
    </div>
    )
};


export default TodaysWeatherForecastHourly;