import React, {memo} from 'react';
import './todays-w-f-h-component.scss';

const TodaysWeatherForecastHourlyComponent = ({ div1, desc, div2, imgSrc }) => {
  console.log("TodaysWeatherForecastHourlyComponent rendering");
  return (
    <div className="forecast-card0">
        <div className="left-side">
            <img className="desc-icon" alt="" src={imgSrc} />
            <div className="parent">
                <div className="div1">{div1}</div>
                <div className="desc">{desc}</div>
            </div>
        </div>
        <div className="div2">{div2}</div>
    </div>
  );
};

export default memo(TodaysWeatherForecastHourlyComponent);