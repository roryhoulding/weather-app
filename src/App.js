import React, {useState, useEffect} from 'react';
import './App.css';
import Info from './components/Info';
import Background from './components/Background';
import Graphic from './components/Graphic';

function App() {
  const [weatherData, setWeatherData] = useState(undefined);
  const [locationData, setLocationData] = useState(undefined);
  const [theme, setTheme] = useState(undefined);

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

  const getTheme = (sunset) => {
    const time = (new Date()).getTime();
    const timeFromSunset = time - parseInt(`${sunset}000`);
    if (timeFromSunset < -1800000) {
      // 30 mins before sunset
      return 'day'
    } else if (timeFromSunset > 600000) {
      // 10 mins after sunset
      return 'night'
    } else {
      // Between 30 mins before sunset and 10 after
      return 'sunset'
    } 
  }

  // This contains the calls to getWeatherData and getLocation
  // The second parameter, empty array, ensures it does not loop endlessly 
  useEffect(() => {
    (async () => {
      const coords = await getLocation();
      // const placeName = await getPlaceName(coords); getting name from weather
      const weatherData = await getWeatherData(coords);
      setWeatherData({
        temp: Math.round(weatherData.main.temp),
        description: weatherData.weather[0].description,
        id: weatherData.weather[0].id,
        weatherCoords: weatherData.coord,
      });
      setLocationData({
        placeName: weatherData.name,
        sunrise: weatherData.sys.sunrise,
        sunset: weatherData.sys.sunset,
        userCoords: coords,
      });
      const theme = getTheme(weatherData.sys.sunset);
      setTheme(theme);
    })();
  }, []);

  return (
    <div className='App'>
      <Background type='gradient' theme={theme}/>
      <Info weatherData={weatherData} locationData={locationData} theme={theme} textEffect={null}/>
      <Graphic theme={theme} weatherData={weatherData}/>
    </div>
  );
}

export default App;
