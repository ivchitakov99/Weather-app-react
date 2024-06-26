import React, { useContext, memo } from 'react';
import './weather-details-information.scss';
import {WeatherDetailsInfoComp} from '../weather-details-info-comp';
import {WeatherContext} from "../../Parent/bg-blur"

const WeatherDetailsInformation = () => {
  console.log("WeatherDetailsInformation rendering");
  const weatherData = useContext(WeatherContext);  
  return (
    <div className="weather-details-information">
        <div className="weather-details-information-title">MODERATE RAIN WITH DRIZZLE</div>
        {weatherData.map((data, index) => (
            <WeatherDetailsInfoComp key={index} {...data} />
        ))}
    </div>
  )
};

export default memo(WeatherDetailsInformation);