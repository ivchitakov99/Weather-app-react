import React , { useEffect } from 'react';
import './bg-blur.scss'; 
import {WeatherDetails} from '../../Core/weather-details';
import {WeatherDetailsInformation} from '../../Core/weather-details-information';
import {HomeDesktopItem} from '../../Core/home-desktop-item';
import {TodaysWeatherForecast} from '../../Core/todays-weather-forecast';
import {TodaysWeatherForecastHourly} from '../../Core/todays-weather-forecast-hourly';
import {HomeDesktopChild} from '../../Core/home-desktop-child';

const BgBlur = () => {
    return (
    <div className="bg-blur">
      <HomeDesktopChild></HomeDesktopChild>  
      <WeatherDetails />
      <WeatherDetailsInformation />
      <HomeDesktopItem />
      <TodaysWeatherForecast />
      <TodaysWeatherForecastHourly />
    </div>
  );
}

export default BgBlur;
export const WeatherContext = React.createContext();
export const ForecastContext = React.createContext();