import React , { useEffect } from 'react';
import './bg-blur.scss'; 
import WeatherDetails from '../../Core/weather-details/weather-details';
import WeatherDetailsInformation from '../../Core/weather-details-information/weather-details-information';
import HomeDesktopItem from '../../Core/home-desktop-item/home-desktop-item';
import TodaysWeatherForecast from '../../Core/todays-weather-forecast/todays-weather-forecast';
import TodaysWeatherForecastHourly from '../../Core/todays-weather-forecast-hourly/todays-weather-forecast-hourly';
import HomeDesktopChild from '../../Core/home-desktop-child/home-desktop-child';
import { useWeatherUpdater } from '../../contexts/WeatherContext';
import { weatherData, forecastData, updateWeatherData } from './index'; // Import the data and utility function

export const WeatherContext = React.createContext();
export const ForecastContext = React.createContext();


// BgBlur Component
const BgBlur = () => {

    const setWeatherData = useWeatherUpdater();

    useEffect(() => {
      updateWeatherData(setWeatherData);
    }, []); // Empty dependency array ensures this runs only once

   
    return (
     
    <div className="bg-blur">
      <HomeDesktopChild></HomeDesktopChild>  
      <WeatherDetails />
      <WeatherContext.Provider value={weatherData}>
        <WeatherDetailsInformation />
      </WeatherContext.Provider>
      <HomeDesktopItem />
      <TodaysWeatherForecast />
      <ForecastContext.Provider value={forecastData}>
        <TodaysWeatherForecastHourly />
      </ForecastContext.Provider>
    </div>
    
  );
}

export default BgBlur;