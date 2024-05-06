import React, {useContext, memo} from 'react';
import './todays-weather-forecast-hourly.scss';
import {TodaysWeatherForecastHourlyComponent} from '../todays-w-f-h-component';
import {ForecastContext} from '../../Parent/bg-blur';

const TodaysWeatherForecastHourly = () => {
    const forecastData = useContext(ForecastContext);
    console.log("TodaysWeatherForecastHourly rendering");
    return (
    <div className="todays-weather-forecast-hourly">
      {forecastData.map((data, index) => (
        <TodaysWeatherForecastHourlyComponent key={index} {...data} />
      ))}
    </div>
    )
};

export default memo(TodaysWeatherForecastHourly);