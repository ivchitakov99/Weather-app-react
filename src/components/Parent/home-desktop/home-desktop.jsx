import React from 'react';
import './home-desktop.scss'; // Assuming you have a CSS file for this component
import LogoIcon from '../../Core/logo-icon/logo-icon';
import MainInfo from '../../Core/main-info/main-info';
import BgBlur from '../bg-blur/bg-blur';
import { WeatherProvider } from '../../contexts/WeatherContext';
import SearchHistoryContainer from '../../Core/search-history-container/search-history-container';
import ScreenOverlay from '../../Core/screen-overlay/screen-overlay';

const HomeDesktop = () => {
  return (
    <div className="home-desktop">
      {/* Your content here */}
      <LogoIcon></LogoIcon>
      <WeatherProvider>
        <BgBlur />
        <MainInfo />
      </WeatherProvider>
      <SearchHistoryContainer></SearchHistoryContainer>
      <ScreenOverlay></ScreenOverlay>
    </div>
  );
}

export default HomeDesktop;
