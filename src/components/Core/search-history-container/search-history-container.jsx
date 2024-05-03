import React, { useState, useEffect } from 'react';
import './search-history-container.scss'; 
import { useSearchContext } from '../../contexts/SearchContext';
import { useWeatherFetch } from '../../contexts/WeatherFetchContext';

const SearchHistoryContainer = () => {
    const [searchHistory, setSearchHistory] = useState([]);
    const { showSearchHistory, setShowSearchHistory } = useSearchContext();
    const fetchAndUpdateWeather = useWeatherFetch(); // Use the context hook
   
    const handleButtonClick = () => {
      // Hide both components when the close button is clicked
      setShowSearchHistory(false);
    };

    useEffect(() => {
      const handleStorageUpdate = () => {
        const storedCities = JSON.parse(sessionStorage.getItem('searchedCities')) || [];
        setSearchHistory(storedCities);
      };
  
      // Add event listener for the custom event
      window.addEventListener('storageUpdated', handleStorageUpdate);
  
      // Remove event listener on cleanup
      return () => {
        window.removeEventListener('storageUpdated', handleStorageUpdate);
      };
    }, []);
  
    const handleCityClick = async (city) => {
      await fetchAndUpdateWeather(city); // Use the context function to fetch weather data
      setShowSearchHistory(false);
    };

    return showSearchHistory && searchHistory ? (
      <div className="search-history-container">
        <div className="search-history-header">
          <h2>Search History</h2>
          <button className="close-btn" onClick={handleButtonClick}>&times;</button>
        </div>
        <ul id="search-history-list">
          {searchHistory.map((city, index) => (
            <li key={index} onClick={() => handleCityClick(city)}>
              {city}
            </li>
          ))}
        </ul>
      </div>
    ) : null;
  };
  
export default SearchHistoryContainer;