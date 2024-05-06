import React, {useState, useEffect, useCallback, memo} from 'react';
import './home-desktop-child.scss'; 
import searchIcon from "../../../img/fasearch.svg";
import { useSearchContext } from '../../contexts/SearchContext';
import { useWeatherFetch } from '../../contexts/WeatherFetchContext';


const HomeDesktopChild = () => {
  console.log("HomeDesktopChild rendering");
  const { showSearchHistory, setShowSearchHistory } = useSearchContext();
  const [city, setCity] = useState('Burgas');
  const [searchedCities, setSearchedCities] = useState([]);
  const fetchAndUpdateWeather = useWeatherFetch(); // Use the context hook

  useEffect(() => {
    console.log("useEffect hook in HDC 1");
    // Load the search history from sessionStorage on component mount
    const storedCities = JSON.parse(sessionStorage.getItem('searchedCities')) || [];
    if (!storedCities.includes(city)) {
      storedCities.push(city);
      sessionStorage.setItem('searchedCities', JSON.stringify(storedCities));
    }
    setSearchedCities(storedCities);
  }, []);

  const handleInputChange = useCallback((event) => {
    console.log("handleInputChange in HDC");
    setCity(event.target.value);
  }, []); // Empty dependency array since it doesn't depend on any other values
  

  useEffect(() => {
    // This will run only once on component mount and fetch the data
    console.log("useEffect hook in HDC 2 (fetchAndUpdateWeather)");
    fetchAndUpdateWeather(city);
  }, []); // Empty dependency array ensures this runs only once on mount

  const handleFormSubmit = useCallback(async (event) => {
    console.log("handleFormSubmit in HDC");
    event.preventDefault(); // Prevent the default form submit action
    if (city) {
      const data = await fetchAndUpdateWeather(city); // Use the context function to fetch weather data
      if (data){
        const storedCities = JSON.parse(sessionStorage.getItem('searchedCities')) || [];
        if (!storedCities.includes(city)) {
          const newStoredCities = [...storedCities, city];
          sessionStorage.setItem('searchedCities', JSON.stringify(newStoredCities));
          setSearchedCities(newStoredCities); // Update the state as well

          // Dispatch a custom event after updating the local storage
          window.dispatchEvent(new Event('storageUpdated'));
        }
      }
    } 
  }, [city, fetchAndUpdateWeather]);

  const handleSearchHistoryButtonClick = useCallback(() => {
    console.log("handleSearchHistoryButtonClick in HDC");
    setShowSearchHistory(!showSearchHistory);
  }, [showSearchHistory]);
    
  return (
    <div className="home-desktop-child" >
        <form id="weather-form" onSubmit={handleFormSubmit}>
          <div className="input-wrapper">
            <input
                type="text"
                id="city"
                className="search-location"
                placeholder="Search Location..."
                value={city}
                onChange={handleInputChange}
            />
          </div>
          <div className="button-wrapper">
            <button type="submit" id="myButton">
              <img className="fasearch-icon1" alt="Search" src={searchIcon} />
            </button>
            <button type="button" id="search-history-btn" onClick={handleSearchHistoryButtonClick}>
              <svg className="search-history-icon" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm5-9h-4V7c0-.55-.45-1-1-1s-1 .45-1 1v5c0 .55.45 1 1 1h5c.55 0 1-.45 1-1s-.45-1-1-1z" />
              </svg>
            </button>
          </div>
        </form>
    </div>
  )
};

export default memo(HomeDesktopChild);    