import React , { useEffect } from 'react';
import './bg-blur.scss'; // Assuming you have a CSS file named App.css
import WeatherDetails from '../../Core/weather-details/weather-details';
import WeatherDetailsInformation from '../../Core/weather-details-information/weather-details-information';
import HomeDesktopItem from '../../Core/home-desktop-item/home-desktop-item';
import TodaysWeatherForecast from '../../Core/todays-weather-forecast/todays-weather-forecast';
import TodaysWeatherForecastHourly from '../../Core/todays-weather-forecast-hourly/todays-weather-forecast-hourly';
import HomeDesktopChild from '../../Core/home-desktop-child/home-desktop-child';

import TEMP_RED from "../../../img/vector1.svg";
import TEMP_BLUE from "../../../img/vector.svg";
import RAINDROP from "../../../img/raindrop.svg";
import CLOUDY from "../../../img/cloudy.svg";
import WINDY from "../../../img/windy.svg";

import Snow from "../../../img/Snow.png"

import Clouds from "../../../img/Clouds.png";

import { useWeatherUpdater } from '../../contexts/WeatherContext';

export const WeatherContext = React.createContext();

export const ForecastContext = React.createContext();





// BgBlur Component
const BgBlur = () => {

    const setWeatherData = useWeatherUpdater();

    // Function to update the entire weather data
    const updateWeatherData = () => {
      setWeatherData({
        temperature: '19°', // New temperature
        city: 'Burgas',     // You can change the city if needed
        timeDate: '11:45 - Tuesday, 10 Sep \'23', // New time and date
        imgSrc: Clouds,    // New image source
      });
    };

    useEffect(() => {
      updateWeatherData();
    }, []); // Empty dependency array ensures this runs only once

   
     
    const weatherData = [
      { tempMax: "Temp max", div11: "15°", imgSrc: TEMP_RED },
      { tempMax: "Temp min", div11: "12°", imgSrc: TEMP_BLUE },
      { tempMax: "Humidity", div11: "94%", imgSrc: RAINDROP },
      { tempMax: "Cloudy", div11: "100%", imgSrc: CLOUDY },
      { tempMax: "Wind", div11: "21km/h", imgSrc: WINDY }
    ];

    const forecastData = [
      { div1: "09:00", desc: "Snow", div2: "10°C", imgSrc: Snow },
      { div1: "12:00", desc: "Snow", div2: "12°C", imgSrc: Snow },
      { div1: "15:00", desc: "Snow", div2: "10°C", imgSrc: Snow },
      { div1: "18:00", desc: "Snow", div2: "13°C", imgSrc: Snow },
      { div1: "21:00", desc: "Snow", div2: "8°C", imgSrc: Snow }
    ];

    

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