import React, { useContext } from 'react';
import './weather-details-information.scss'; // Assuming you have a CSS file named App.css
/*
import TEMP_RED from "../../../img/vector1.svg";
import TEMP_BLUE from "../../../img/vector.svg";
import RAINDROP from "../../../img/raindrop.svg";
import CLOUDY from "../../../img/cloudy.svg";
import WINDY from "../../../img/windy.svg";
*/
import WeatherDetailsInfoComp from '../weather-details-info-comp/weather-details-info-comp';
import {WeatherContext} from "../../Parent/bg-blur/bg-blur"



// WeatherDetailsInformation Component
const WeatherDetailsInformation = () => {

  const weatherData = useContext(WeatherContext);  
  return (
    <div className="weather-details-information">
        <div className="weather-details-information-title">MODERATE RAIN WITH DRIZZLE</div>

            
            {/*<div className="group-parent">
                <div className="temp-max-parent">
                    <div className="temp-max">Temp max</div>
                    <div className="div11">15°</div>
                </div>
                <img className="vector-icon" alt="" src={TEMP_RED} />
            </div>*/}
            {weatherData.map((data, index) => (
                <WeatherDetailsInfoComp key={index} {...data} />
            ))}
            
        {/* <WeatherDetailsInfoComp tempMax="Temp max" div11="15°" imgSrc={TEMP_RED}></WeatherDetailsInfoComp>
            <WeatherDetailsInfoComp  tempMax="Temp min" div11="12°" imgSrc={TEMP_BLUE}></WeatherDetailsInfoComp>
            <WeatherDetailsInfoComp  tempMax="Humadity" div11="94%" imgSrc={RAINDROP}></WeatherDetailsInfoComp>
            <WeatherDetailsInfoComp  tempMax="Cloudy" div11="100%" imgSrc={CLOUDY}></WeatherDetailsInfoComp>
            <WeatherDetailsInfoComp  tempMax="Wind" div11="21km/h" imgSrc={WINDY}></WeatherDetailsInfoComp>
        */}   
            {/*<div className="group-parent">
                <div className="temp-min-parent">
                    <div className="temp-min">Temp min</div>
                    <div className="div11">16°</div>
                </div>
                <img className="vector-icon" alt="" src={TEMP_BLUE} />
            </div>*/}
            
            

            {/*<div className="outline-parent">
                <img className="outline-icon" alt="" src={RAINDROP} />

                <div className="humadity-parent">
                    <div className="humadity">Humadity</div>
                    <div className="div13">94%</div>
                </div>
            </div>*/}
            
            

            {/*<div className="outline-group">
                <img className="outline-icon1" alt="" src={CLOUDY} />
                <div className="cloudy-parent">
                    <div className="humadity">Cloudy</div>
                    <div className="div13">100%</div>
                </div>
            </div> */}
            
            
            {/* <div className="outline-container">
                <img className="outline-icon2" alt="" src={WINDY} />
                <div className="cloudy-parent">
                    <div className="humadity">Wind</div>
                    <div className="kmh">21km/h</div>
                </div>
            </div> */}
            
            
    </div>
  )
};

export default WeatherDetailsInformation;