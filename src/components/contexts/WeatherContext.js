// WeatherContext.js
import React, { createContext, useContext, useState } from 'react';

const WeatherContext = createContext({
  weatherData: {},
  setWeatherData: () => {}, // Empty function as a placeholder
});

export const WeatherProvider = ({ children }) => {
  console.log("WeatherProvider");
  const [weatherData, setWeatherData] = useState({
  });

  // Only expose the setWeatherData function to the BgBlur component
  const value = { weatherData, setWeatherData };

  return (
    <WeatherContext.Provider value={value}>
      {children}
    </WeatherContext.Provider>
  );
};

// Custom hook for BgBlur to update data
export const useWeatherUpdater = () => {
  const { setWeatherData } = useContext(WeatherContext);
  return setWeatherData;
};

// Custom hook for MainInfo to access data
export const useWeatherData = () => {
  const { weatherData } = useContext(WeatherContext);
  return weatherData;
};