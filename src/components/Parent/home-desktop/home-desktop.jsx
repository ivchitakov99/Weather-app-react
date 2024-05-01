import React from 'react';
import './home-desktop.scss'; // Assuming you have a CSS file for this component
import {LogoIcon} from '../../Core/logo-icon';
import {MainInfo} from '../../Core/main-info';
import {BgBlur} from '../bg-blur';
import {WeatherProvider} from '../../contexts/WeatherContext';
import {SearchHistoryContainer} from '../../Core/search-history-container';
import {ScreenOverlay} from '../../Core/screen-overlay';

const HomeDesktop = () => {
  return (
    <div className="home-desktop">
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
