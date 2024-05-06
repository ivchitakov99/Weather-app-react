import './App.css';
import {BgWeatherIcon} from './components/Parent/bg-weather-icon';
import {HomeDesktop} from './components/Parent/home-desktop';


function App() {
  console.log("App rendering");
  return (
    <>
      <BgWeatherIcon/>
      <HomeDesktop />
    </>
  );
}

export default App;
