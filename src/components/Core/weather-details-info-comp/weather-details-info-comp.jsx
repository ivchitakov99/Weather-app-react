import React, {memo} from 'react';
import './weather-details-info-comp.scss';

const WeatherDetailsInfoComp = ({ tempMax, div11, imgSrc }) => {
  return (
    <div className="group-parent">
      <div className="temp-max-parent">
        <p className="temp-max">{tempMax}</p>
        <p className="div11">{div11}</p>
      </div>
      <img className="vector-icon" alt="" src={imgSrc} />
    </div>
  );
};

export default memo(WeatherDetailsInfoComp);
