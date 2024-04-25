import React, { useContext } from 'react';
import './weather-details-information.scss';
import WeatherDetailsInfoComp from '../weather-details-info-comp/weather-details-info-comp';
import {WeatherContext} from "../../Parent/bg-blur/bg-blur"

// WeatherDetailsInformation Component
const WeatherDetailsInformation = () => {

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

export default WeatherDetailsInformation;