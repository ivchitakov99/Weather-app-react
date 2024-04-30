import React, {useContext} from 'react';
import './todays-weather-forecast-hourly.scss';
import {TodaysWeatherForecastHourlyComponent} from '../todays-w-f-h-component';

const TodaysWeatherForecastHourly = () => {
    return (
    <div className="todays-weather-forecast-hourly">
      {forecastData.map((data, index) => (
        <TodaysWeatherForecastHourlyComponent key={index} {...data} />
      ))}
    </div>
    )
};

export default TodaysWeatherForecastHourly;