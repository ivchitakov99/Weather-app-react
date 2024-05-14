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
import { CityProvider } from '../../contexts/CityContext';
import { HomeDesktopChild } from '../../Core/home-desktop-child';

const HomeDesktop = () => {
  return (
    <SearchProvider>
      <WeatherFetchProvider>
        <CityProvider>
        <div className="home-desktop">
          <HomeDesktopChild/>
          <LogoIcon></LogoIcon>
          <WeatherProvider>  
            <BgBlur />
            <MainInfo />
          </WeatherProvider>
          <SearchHistoryContainer/>
          <ScreenOverlay/>
        </div>
        </CityProvider>
      </WeatherFetchProvider>
    </SearchProvider>
  );
}

export default HomeDesktop;
