import React from 'react';
import './weather-details-information.scss'; // Assuming you have a CSS file named App.css


// WeatherDetailsInformation Component
const WeatherDetailsInformation = () => (
  <div className="weather-details-information">
    <div className="weather-details-information-title"></div>
        <div className="group-parent">
            <div className="temp-max-parent">
                <div className="temp-max">Temp max</div>
                <div className="div11"></div>
            </div>
            <img className="vector-icon" alt="" src="./public/vector1.svg" />
        </div>
        
        <div className="group-parent">
            <div className="temp-min-parent">
                <div className="temp-min">Temp min</div>
                <div className="div11"></div>
            </div>
            <img className="vector-icon" alt="" src="./public/vector.svg" />
        </div>

        <div className="outline-parent">
            <img className="outline-icon" alt="" src="./public/raindrop.svg" />

            <div className="humadity-parent">
                <div className="humadity">Humadity</div>
                <div className="div13"></div>
            </div>
        </div>

        <div className="outline-group">
            <img className="outline-icon1" alt="" src="./public/cloudy.svg" />
            <div className="cloudy-parent">
                <div className="humadity">Cloudy</div>
                <div className="div13"></div>
            </div>
        </div>

        <div className="outline-container">
            <img className="outline-icon2" alt="" src="./public/windy.svg" />
            <div className="cloudy-parent">
                <div className="humadity">Wind</div>
                <div className="kmh"></div>
            </div>
        </div>
  </div>
);

export default WeatherDetailsInformation;