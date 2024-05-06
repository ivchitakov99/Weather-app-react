import React, {memo} from 'react';
import './home-desktop-item.scss';

const HomeDesktopItem = () => {
  console.log("HomeDesktopItem rendering");
  return(
    <div className="home-desktop-item"></div>
  );
}
export default memo(HomeDesktopItem);    