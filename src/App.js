import React, {useState, useEffect} from 'react';
import './App.css';
import Info from './components/Info';
import Background from './components/Background';
import Graphic from './components/Graphic';
import getGraphicData from './helpers/getGraphicData';

function App() {
  const [weatherData, setWeatherData] = useState(undefined);
  const [locationData, setLocationData] = useState(undefined);
  const [graphicData, setGraphicData] = useState(undefined);
  const [theme, setTheme] = useState(undefined);

  // This contains the calls to getWeatherData and getUserCoords
  // The second parameter, empty array, ensures it does not loop endlessly 
  useEffect(() => {
    (async () => {
      const coords = await getUserCoords();
      const rawWeatherData = await getWeatherData(coords);
      setWeatherData({
        temp: Math.round(rawWeatherData.main.temp),
        description: rawWeatherData.weather[0].description,
        id: rawWeatherData.weather[0].id,
        weatherCoords: rawWeatherData.coord,
      });
      setLocationData({
        placeName: rawWeatherData.name,
        sunrise: rawWeatherData.sys.sunrise,
        sunset: rawWeatherData.sys.sunset,
        userCoords: coords,
      });
      const graphicData = getGraphicData(rawWeatherData.weather[0].id);
      // const graphicData = getGraphicData(762);
      setGraphicData(graphicData);
      const theme = getTheme(rawWeatherData.sys.sunset);
      setTheme(theme);
    })();
  }, []);

  const getUserCoords = async () => {
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
      // > 30 mins before sunset
      return 'day'
    } else if (timeFromSunset > 600000) {
      // > 10 mins after sunset
      return 'night'
    } else {
      // Between 30 mins before sunset and 10 after
      return 'sunset'
    } 
  }

  return (
    <div className='App'>
      <Background theme={theme} graphicData={graphicData}/>
      <Info theme={theme} weatherData={weatherData} locationData={locationData} graphicData={graphicData}/>
      <Graphic theme={theme} graphicData={graphicData}/>
    </div>
  );
}

export default App;
