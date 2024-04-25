// index.js

import Snow from "../../../img/Snow.png";
import Clouds from "../../../img/Clouds.png";
import TEMP_RED from "../../../img/vector1.svg";
import TEMP_BLUE from "../../../img/vector.svg";
import RAINDROP from "../../../img/raindrop.svg";
import CLOUDY from "../../../img/cloudy.svg";
import WINDY from "../../../img/windy.svg";

export const weatherData = [
  { tempMax: "Temp max", div11: "15°", imgSrc: TEMP_RED },
  { tempMax: "Temp min", div11: "11°", imgSrc: TEMP_BLUE },
  { tempMax: "Humidity", div11: "96%", imgSrc: RAINDROP },
  { tempMax: "Cloudy", div11: "100%", imgSrc: CLOUDY },
  { tempMax: "Wind", div11: "21km/h", imgSrc: WINDY }
];

export const forecastData = [
  { div1: "09:00", desc: "Snow", div2: "10°C", imgSrc: Snow },
  { div1: "12:00", desc: "Snow", div2: "15°C", imgSrc: Snow },
  { div1: "15:00", desc: "Snow", div2: "10°C", imgSrc: Snow },
  { div1: "18:00", desc: "Snow", div2: "12°C", imgSrc: Snow },
  { div1: "21:00", desc: "Snow", div2: "8°C", imgSrc: Snow }
];

export const updateWeatherData = (setWeatherData) => {
  setWeatherData({
    temperature: '19°',
    city: 'Burgas',
    timeDate: '11:47 - Tuesday, 10 Sep \'23',
    imgSrc: Clouds,
  });
};
