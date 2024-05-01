import React , {useState, useEffect, useMemo, useCallback} from 'react';
import './bg-blur.scss'; 
import {WeatherDetails} from '../../Core/weather-details';
import {WeatherDetailsInformation} from '../../Core/weather-details-information';
import {HomeDesktopItem} from '../../Core/home-desktop-item';
import {TodaysWeatherForecast} from '../../Core/todays-weather-forecast';
import {TodaysWeatherForecastHourly} from '../../Core/todays-weather-forecast-hourly';
import {HomeDesktopChild} from '../../Core/home-desktop-child';
import {useWeatherUpdater} from '../../contexts/WeatherContext';
import Snow from "../../../img/Snow.png";
import Clouds from "../../../img/Clouds.png";
import TEMP_RED from "../../../img/vector1.svg";
import TEMP_BLUE from "../../../img/vector.svg";
import Rain from "../../../img/raindrop.svg";
import Cloudy from "../../../img/cloudy.svg";
import Windy from "../../../img/windy.svg";
import Clear from "../../../img/Clear.png"
import fetchWeatherData from '../../services/weatherService';

const BgBlur = () => {

    const [weatherDataAPI, setweatherDataAPI] = useState(null);

     // Function to fetch weather data and update state
    const handleFetchWeatherData = useCallback(async (city) => {
      try {
        const data = await fetchWeatherData(city);
        setweatherDataAPI(data); // Update the weather data state
        console.log('Fetched weather data:', data); // Log it to the console
      } catch (error) {
        console.error('Failed to fetch weather data:', error);
      }
    }, []);
    
    useEffect(() => {
      // This will run only once on component mount and fetch the data
      handleFetchWeatherData('Burgas');
    }, [handleFetchWeatherData]); // Empty dependency array ensures this runs only once on mount
    
    const weatherImages = useMemo(() => ({
      Rain: Rain,
      Snow: Snow,
      Clouds: Clouds,
      Clear: Clear
      // ... other mappings
    }), []); // Dependencies array is empty as these images likely don't change
    
    const setWeatherData = useWeatherUpdater();
   
    useEffect(() => {
      if (weatherDataAPI) {
        const forecast = weatherDataAPI.list[0];
        const date = new Date(forecast.dt*1000);
        const timeOptions = { hour: '2-digit', minute: '2-digit' };
        const dateOptions = { weekday: 'long', month: 'short', day: 'numeric' };
        const formattedTime = date.toLocaleTimeString('en-GB', timeOptions);
        const formattedDate = date.toLocaleDateString('en-GB', dateOptions);
        const year = " '" + date.getFullYear().toString().substr(-2);
  
        setWeatherData({
          temperature: `${Math.round(forecast.main.temp - 273.15)}°`,
          city: weatherDataAPI.city.name,
          timeDate: `${formattedTime} - ${formattedDate}${year}`,
          imgSrc: weatherImages[forecast.weather[0].main] || Snow,
        });
      }
    }, [weatherDataAPI, setWeatherData, weatherImages]);


    // Update weatherData array with fetched data if available
    const weatherData = useMemo(() => weatherDataAPI ? [
      {
        tempMax: "Temp max",
        div11: `${Math.round(weatherDataAPI.list[0].main.temp_max - 273.15)}°`,
        imgSrc: TEMP_RED,
      },
      {
        tempMax: "Temp min",
        div11: `${Math.round(weatherDataAPI.list[0].main.temp_min - 273.15)}°`,
        imgSrc: TEMP_BLUE,
      },
      {
        tempMax: "Humidity",
        div11: `${weatherDataAPI.list[0].main.humidity}%`,
        imgSrc: Rain,
      },
      {
        tempMax: "Cloudy",
        div11: `${weatherDataAPI.list[0].clouds.all}%`,
        imgSrc: Cloudy,
      },
      {
        tempMax: "Wind",
        div11: `${Math.round(weatherDataAPI.list[0].wind.speed * 3.6)}km/h`,
        imgSrc: Windy,
      },
    ] : [], [weatherDataAPI]);


    // Dynamically generate forecastData based on weatherDataAPI
    const forecastData = useMemo(() => weatherDataAPI
    ? weatherDataAPI.list.slice(0, 8).map((forecast) => {
        const dateTime = new Date(forecast.dt * 1000); // Convert UNIX timestamp to JS Date object
        const timeOptions = { hour: '2-digit', minute: '2-digit', hour12: false };
        const formattedTime = dateTime.toLocaleTimeString('en-GB', timeOptions);

        return {
          div1: formattedTime,
          desc: forecast.weather[0].main,
          div2: `${Math.round(forecast.main.temp - 273.15)}°C`,
          imgSrc: weatherImages[forecast.weather[0].main] || Snow
        };
      })
    : [], [weatherDataAPI, weatherImages]);

    return (
    <div className="bg-blur">
      <HomeDesktopChild fetchWeatherData={handleFetchWeatherData}></HomeDesktopChild>  
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
