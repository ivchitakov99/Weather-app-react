import React, {memo} from 'react';
import './todays-weather-forecast.scss';

const TodaysWeatherForecast = () => {
  console.log("TodaysWeatherForecast rendering");
  return(
    <div className="todays-weather-forecast">Today’s Weather Forecast...</div>
  )};

export default memo(TodaysWeatherForecast);  