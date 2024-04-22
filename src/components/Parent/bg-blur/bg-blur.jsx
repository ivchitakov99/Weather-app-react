import React from 'react';
import './bg-blur.scss'; // Assuming you have a CSS file named App.css
import WeatherDetails from '../../Core/weather-details/weather-details';
import WeatherDetailsInformation from '../../Core/weather-details-information/weather-details-information';
import HomeDesktopItem from '../../Core/home-desktop-item/home-desktop-item';
import TodaysWeatherForecast from '../../Core/todays-weather-forecast/todays-weather-forecast';
import TodaysWeatherForecastHourly from '../../Core/todays-weather-forecast-hourly/todays-weather-forecast-hourly';
import HomeDesktopChild from '../../Core/home-desktop-child/home-desktop-child';

// BgBlur Component
const BgBlur = () => (
    <div className="bg-blur">
      <HomeDesktopChild></HomeDesktopChild>  
      <WeatherDetails />
      <WeatherDetailsInformation />
      <HomeDesktopItem />
      <TodaysWeatherForecast />
      <TodaysWeatherForecastHourly />
    </div>
  );
  
  export default BgBlur;