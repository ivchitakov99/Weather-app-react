// logo-icon.jsx
import './logo-icon.scss';
import logoIcon from '../../../img/logo@2x.png';
import { memo } from 'react';
const LogoIcon = () => {
  console.log("LogoIcon rendering");
  return (
    <img className="logo-icon" alt="" src={logoIcon} />
  );
};

export default memo(LogoIcon);