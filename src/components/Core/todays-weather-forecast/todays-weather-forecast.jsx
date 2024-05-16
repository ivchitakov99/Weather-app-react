import React, {memo} from 'react';
import './todays-weather-forecast.scss';

const TodaysWeatherForecast = () => {
  return(
    <p className="todays-weather-forecast">Today’s Weather Forecast...</p>
  )};

export default memo(TodaysWeatherForecast);  