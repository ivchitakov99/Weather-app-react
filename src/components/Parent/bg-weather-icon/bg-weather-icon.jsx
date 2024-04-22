import React from 'react';
import bgWeather from '../../../img/bgweather@2x.png'; // Make sure the image is in the src folder
import './bg-weather-icon.scss';

function BgWeatherIcon() {
  return (
    <img className="bg-weather-icon" alt="" src={bgWeather} />
  );
}

export default BgWeatherIcon;
