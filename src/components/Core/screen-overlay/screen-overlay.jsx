import React from 'react';
import './screen-overlay.scss'; 

const ScreenOverlay = () => {
  return (
    <div className="screen-overlay" style={{ display: 'none' }}>
      <div className="screen-overlay-blur"></div>
    </div>
  );
};

export default ScreenOverlay;
