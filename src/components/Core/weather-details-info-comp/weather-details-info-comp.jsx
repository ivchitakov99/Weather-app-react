import React, {memo} from 'react';
import './weather-details-info-comp.scss';

const WeatherDetailsInfoComp = ({ tempMax, div11, imgSrc }) => {
  console.log("WeatherDetailsInfoComp rendering");
  return (
    <div className="group-parent">
      <div className="temp-max-parent">
        <div className="temp-max">{tempMax}</div>
        <div className="div11">{div11}</div>
      </div>
      <img className="vector-icon" alt="" src={imgSrc} />
    </div>
  );
};

export default memo(WeatherDetailsInfoComp);
