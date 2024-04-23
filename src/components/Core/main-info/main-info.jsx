import React from 'react';
import './main-info.scss';
import Clouds from "../../../img/Clouds.png";

const MainInfo  = () => {
  return (
    <div className="main-info">
      <div className="div">16°</div>
      <div className="city-parent">
        <div className="city">Burgas</div>
        <div className="time-date">5:49 - Monday</div>
      </div>
      <img className="cloudy-icon" id="title-img" alt="" src={Clouds} /*style={{display: 'none'}}*/ />
    </div>
  );
};

export default MainInfo;
