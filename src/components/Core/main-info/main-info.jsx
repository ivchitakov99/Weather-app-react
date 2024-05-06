import './main-info.scss';
import { useWeatherData } from '../../contexts/WeatherContext';
import { memo } from 'react';
const MainInfo = () => {
  const weatherData = useWeatherData();
  return (
    <div className="main-info">
      {weatherData.temperature ? (
        <>
          <div className="div">{weatherData.temperature}</div>
          <div className="city-parent">
            <div className="city">{weatherData.city}</div>
            <div className="time-date">{weatherData.timeDate}</div>
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