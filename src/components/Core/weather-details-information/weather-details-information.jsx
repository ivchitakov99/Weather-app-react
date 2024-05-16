import React, { useContext, memo } from 'react';
import './weather-details-information.scss';
import {WeatherDetailsInfoComp} from '../weather-details-info-comp';
import {WeatherContext} from "../../Parent/bg-blur"

const WeatherDetailsInformation = () => {
  const weatherData = useContext(WeatherContext);  
  return (
    <div className="weather-details-information">
        <h4 className="weather-details-information-title">MODERATE RAIN WITH DRIZZLE</h4>
        {weatherData.map((data, index) => (
            <WeatherDetailsInfoComp key={index} {...data} />
        ))}
    </div>
  )
};

export default memo(WeatherDetailsInformation);