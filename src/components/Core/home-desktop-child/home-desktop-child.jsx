import React /*, {useState}*/ from 'react';
import './home-desktop-child.scss'; 
import searchIcon from "../../../img/fasearch.svg";


const HomeDesktopChild = ({fetchWeatherData}) => {

  /*const [city, setCity] = useState('');*/

  const handleInputChange = (event) => {
    setCity(event.target.value);
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault(); // Prevent the default form submit action
    if (city) {
      await fetchWeatherData(city); // Fetch the weather data and pass it to BgBlur
    }
  };
    
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
            <button type="button" id="search-history-btn">
              <svg className="search-history-icon" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm5-9h-4V7c0-.55-.45-1-1-1s-1 .45-1 1v5c0 .55.45 1 1 1h5c.55 0 1-.45 1-1s-.45-1-1-1z" />
              </svg>
            </button>
          </div>
        </form>
    </div>
  )
};

export default HomeDesktopChild;    