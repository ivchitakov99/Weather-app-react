// WeatherFetchContext.js
import React, { createContext, useContext, useState, useCallback } from 'react';
import fetchWeatherData from '../services/weatherService'; // Adjust the import path as needed

export const WeatherFetchContext = createContext({
  weatherDataAPI: null,
  fetchAndUpdateWeather: () => {},
});

export const WeatherFetchProvider = ({ children }) => {
  const [weatherDataAPI, setWeatherDataAPI] = useState(null);

  const fetchAndUpdateWeather = useCallback(async (city) => {
    try {
      const data = await fetchWeatherData(city);
      if (data) {
        setWeatherDataAPI(data); // Update the weather data state
        return data;
      }
    } catch (error) {
      console.error('Failed to fetch weather data:', error);
    }
  }, []);

  return (
    <WeatherFetchContext.Provider value={{ weatherDataAPI, fetchAndUpdateWeather }}>
      {children}
    </WeatherFetchContext.Provider>
  );
};

// Custom hook for components to trigger weather data fetch and update
export const useWeatherFetch = () => {
  const context = useContext(WeatherFetchContext);
  if (!context) {
    throw new Error('useWeatherFetch must be used within a WeatherFetchProvider');
  }
  return context.fetchAndUpdateWeather;
};

// Custom hook for components to access fetched weather data
export const useWeatherDataAPI = () => {
  const context = useContext(WeatherFetchContext);
  if (!context) {
    throw new Error('useWeatherDataAPI must be used within a WeatherFetchProvider');
  }
  return context.weatherDataAPI;
};
