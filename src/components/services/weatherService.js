import axios from 'axios';

// Set up the Axios instance
const weatherAPI = axios.create({
  baseURL: 'https://api.openweathermap.org',
  params: {
    appid: '2ffbace46c991eecf127bb4936148108' // Your API key
  }
});

// Combined function to fetch geolocation and weather data
const fetchWeatherData = async (city) => {
  try {
    // Get the geolocation data
    const geoResponse = await weatherAPI.get('/geo/1.0/direct', {
      params: { q: city, limit: 1 }
    });
    const { lat, lon, name: cityName } = geoResponse.data[0];

    // Use the geolocation data to get the weather data
    const weatherResponse = await weatherAPI.get('/data/2.5/forecast', {
      params: { lat, lon }
    });
    const weatherData = weatherResponse.data;

    // Here you would use weatherData and cityName
    console.log(cityName, weatherData);
    return weatherData;
  } catch (error) {
    console.error('Error in fetchWeatherData:', error);
  }
};

export default fetchWeatherData;
