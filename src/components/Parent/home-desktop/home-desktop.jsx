import React from 'react';
import './home-desktop.scss'; // Assuming you have a CSS file for this component
import {LogoIcon} from '../../Core/logo-icon';
import {MainInfo} from '../../Core/main-info';
import {BgBlur} from '../bg-blur';
import {WeatherProvider} from '../../contexts/WeatherContext';
import {SearchHistoryContainer} from '../../Core/search-history-container';
import {ScreenOverlay} from '../../Core/screen-overlay';
import { SearchProvider } from '../../contexts/SearchContext';
import { WeatherFetchProvider } from '../../contexts/WeatherFetchContext';

const HomeDesktop = () => {
  console.log("HomeDesktop rendering");
  return (
    <SearchProvider>
      <WeatherFetchProvider>
        <div className="home-desktop">
          <LogoIcon></LogoIcon>
          <WeatherProvider>  
            <BgBlur />
            <MainInfo />
          </WeatherProvider>
          <SearchHistoryContainer/>
          <ScreenOverlay/>
        </div>
      </WeatherFetchProvider>
    </SearchProvider>
  );
}

export default HomeDesktop;
