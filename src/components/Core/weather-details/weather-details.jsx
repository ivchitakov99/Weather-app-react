import React, {memo} from 'react';
import './weather-details.scss'; 

const WeatherDetails = () => {
  console.log("WeatherDetails rendering");
  return (
  <div className="weather-details">Weather Details...</div>
)};

export default memo(WeatherDetails);