import './main-info.scss';
import { useWeatherData } from '../../contexts/WeatherContext';
import { memo } from 'react';
const MainInfo = () => {
  const weatherData = useWeatherData();
  return (
    <div className="main-info">
      {weatherData.temperature ? (
        <>
          <p className="div">{weatherData.temperature}</p>
          <div className="city-parent">
            <p className="city">{weatherData.city}</p>
            <p className="time-date">{weatherData.timeDate}</p>
          </div>
          <img className="cloudy-icon" id="title-img" alt="" src={weatherData.imgSrc} />
        </>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default memo(MainInfo);