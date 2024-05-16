import React, {memo} from 'react';
import './todays-w-f-h-component.scss';

const TodaysWeatherForecastHourlyComponent = ({ div1, desc, div2, imgSrc }) => {
  return (
    <div className="forecast-card0">
        <div className="left-side">
            <img className="desc-icon" alt="" src={imgSrc} />
            <div className="parent">
                <p className="div1">{div1}</p>
                <p className="desc">{desc}</p>
            </div>
        </div>
        <p className="div2">{div2}</p>
    </div>
  );
};

export default memo(TodaysWeatherForecastHourlyComponent);