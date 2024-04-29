import React , { useEffect } from 'react';
import './bg-blur.scss'; 
import {WeatherDetails} from '../../Core/weather-details';
import {WeatherDetailsInformation} from '../../Core/weather-details-information';
import {HomeDesktopItem} from '../../Core/home-desktop-item';
import {TodaysWeatherForecast} from '../../Core/todays-weather-forecast';
import {TodaysWeatherForecastHourly} from '../../Core/todays-weather-forecast-hourly';
import {HomeDesktopChild} from '../../Core/home-desktop-child';
import { useWeatherUpdater } from '../../contexts/WeatherContext';

import Snow from "../../../img/Snow.png";
import Clouds from "../../../img/Clouds.png";
import TEMP_RED from "../../../img/vector1.svg";
import TEMP_BLUE from "../../../img/vector.svg";
import RAINDROP from "../../../img/raindrop.svg";
import CLOUDY from "../../../img/cloudy.svg";
import WINDY from "../../../img/windy.svg";

const weatherData = [
  { tempMax: "Temp max", div11: "16°", imgSrc: TEMP_RED },
  { tempMax: "Temp min", div11: "12°", imgSrc: TEMP_BLUE },
  { tempMax: "Humidity", div11: "96%", imgSrc: RAINDROP },
  { tempMax: "Cloudy", div11: "100%", imgSrc: CLOUDY },
  { tempMax: "Wind", div11: "21km/h", imgSrc: WINDY }
];

const forecastData = [
  { div1: "09:00", desc: "Snow", div2: "12°C", imgSrc: Snow },
  { div1: "12:00", desc: "Snow", div2: "15°C", imgSrc: Snow },
  { div1: "15:00", desc: "Snow", div2: "10°C", imgSrc: Snow },
  { div1: "18:00", desc: "Snow", div2: "12°C", imgSrc: Snow },
  { div1: "21:00", desc: "Snow", div2: "8°C", imgSrc: Snow }
];

const updateWeatherData = (setWeatherData) => {
  setWeatherData({
    temperature: '19°',
    city: 'Burgas',
    timeDate: '11:48 - Tuesday, 10 Sep \'23',
    imgSrc: Clouds,
  });
};

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

export const WeatherContext = React.createContext();
export const ForecastContext = React.createContext();