import React, { useState, useEffect, useCallback, useMemo } from 'react';
import './search-history-container.scss'; 
import { useSearchContext } from '../../contexts/SearchContext';
import { useWeatherFetch } from '../../contexts/WeatherFetchContext';

const SearchHistoryContainer = () => {
    console.log("SearchHistoryContainer rendering");
    const [searchHistory, setSearchHistory] = useState([]);
    const { showSearchHistory, setShowSearchHistory } = useSearchContext();
    const fetchAndUpdateWeather = useWeatherFetch(); // Use the context hook
   
    const handleButtonClick = useCallback(() => {
      setShowSearchHistory(false);
    }, [setShowSearchHistory]); // Dependency array includes setShowSearchHistory

    useEffect(() => {
      const handleStorageUpdate = () => {
        const storedCities = JSON.parse(sessionStorage.getItem('searchedCities')) || [];
        setSearchHistory(storedCities);
      };
  
      // Add event listener for the custom event
      window.addEventListener('storageUpdated', handleStorageUpdate);

      window.dispatchEvent(new Event('storageUpdated'));
  
      // Remove event listener on cleanup
      return () => {
        window.removeEventListener('storageUpdated', handleStorageUpdate);
      };
    }, []);
  
    const handleCityClick = useCallback(async (city) => {
      await fetchAndUpdateWeather(city);
      setShowSearchHistory(false);
    }, [fetchAndUpdateWeather, setShowSearchHistory]); // Dependencies are fetchAndUpdateWeather and setShowSearchHistory

    const searchHistoryListItems = useMemo(() => {
      return searchHistory.map((city, index) => (
        <li key={index} onClick={() => handleCityClick(city)}>
          {city}
        </li>
      ));
    }, [searchHistory, handleCityClick]);

    return showSearchHistory && searchHistory ? (
      <div className="search-history-container">
        <div className="search-history-header">
          <h2>Search History</h2>
          <button className="close-btn" onClick={handleButtonClick}>&times;</button>
        </div>
        <ul id="search-history-list">
          {searchHistoryListItems}
        </ul>
      </div>
    ) : null;
  };
  
export default SearchHistoryContainer;