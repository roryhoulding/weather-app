import React, {useState, useEffect} from 'react';
import './App.css';
import Info from './components/Info';
import Background from './components/Background';
import Graphic from './components/Graphic';

function App() {
  const [weatherData, setWeather] = useState(undefined);
  const [locationData, setLocationData] = useState(undefined);
  const [theme, setTheme] = useState('day-grey');

  const getLocation = async () => {
    const geoLocation = await new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(resolve, reject);
    });
    const coords = {
      lat: geoLocation.coords.latitude,
      lng: geoLocation.coords.longitude,
    }
    //setLocation(coords)
    return coords;
  }
  
  const getWeatherData = async (coords) => {
    const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${coords.lat}&lon=${coords.lng}&appid=78a6f0b5063156d4999c4ecb12d3b6af&units=metric`)
    const data = await response.json();
    return data;
  }

  // This contains the calls to getWeatherData and getLocation
  // The second parameter, empty array, ensures it does not loop endlessly 
  useEffect(() => {
    (async () => {
      const coords = await getLocation();
      // const placeName = await getPlaceName(coords); getting name from weather
      const weatherResponse = await getWeatherData(coords);
      setWeather({
        temp: Math.round(weatherResponse.main.temp),
        description: weatherResponse.weather[0].description,
        weatherTypeId: weatherResponse.weather[0].id,
        weatherCoords: weatherResponse.coord,
      });
      setLocationData({
        placeName: weatherResponse.name,
        sunrise: weatherResponse.sys.sunrise,
        sunset: weatherResponse.sys.sunset,
        userCoords: coords,
      });
    })();
  }, []);

  return (
    <div className='App'>
      <Background type='gradient' theme={theme}/>
      <Info weatherData={weatherData} locationData={locationData} theme={theme} textEffect={null}/>
      <Graphic />
    </div>
  );
}

export default App;
