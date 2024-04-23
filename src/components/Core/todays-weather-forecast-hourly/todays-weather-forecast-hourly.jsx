import React from 'react';
import './todays-weather-forecast-hourly.scss';

import Snow from "../../../img/Snow.png";


// TodaysWeatherForecastHourly Component
const TodaysWeatherForecastHourly = () => (
    <div className="todays-weather-forecast-hourly">

          <div className="forecast-card0">
            <div className="parent">
              <div className="div1">09:00</div>
              <div className="desc">Snow</div>
            </div>
            <div className="div2">12°C</div>
            <img className="desc-icon" alt="" src={Snow} />
          </div>

          <div className="forecast-card1">
            <div className="parent">
              <div className="div1">12:00</div>
              <div className="desc">Snow</div>
            </div>
            <div className="div2">10°C</div>
            <img className="desc-icon" alt="" src={Snow} />
          </div>

          <div className="forecast-card2">
            <div className="parent">
              <div className="div1">15:00</div>
              <div className="desc">Snow</div>
            </div>
            <div className="div2">8°C</div>
            <img className="desc-icon" alt="" src={Snow} />
          </div>

          <div className="forecast-card3">
            <div className="parent">
              <div className="div1">18:00</div>
              <div className="desc">Snow</div>
            </div>
            <div className="div2">11°C</div>
            <img className="desc-icon" alt="" src={Snow} />
          </div>

          <div className="forecast-card4">
            <div className="parent">
              <div className="div1">21:00</div>
              <div className="desc">Snow</div>
            </div>
            <div className="div2">5°C</div>
            <img className="desc-icon" alt="" src={Snow} />
          </div>

    </div>
  );


export default TodaysWeatherForecastHourly;