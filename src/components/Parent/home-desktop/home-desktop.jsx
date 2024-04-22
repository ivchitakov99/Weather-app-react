import React from 'react';
import './home-desktop.scss'; // Assuming you have a CSS file for this component
import LogoIcon from '../../Core/logo-icon/logo-icon';
import MainInfo from '../../Core/main-info/main-info';
import BgBlur from '../bg-blur/bg-blur';
import HomeDesktopChild from '../../Core/home-desktop-child/home-desktop-child';


const HomeDesktop = () => {
  return (
    <div className="home-desktop">
      {/* Your content here */}
      <BgBlur></BgBlur>
      { /*<HomeDesktopChild/> */}
      <LogoIcon></LogoIcon>
      <MainInfo></MainInfo>
      
    </div>
  );
}

export default HomeDesktop;
