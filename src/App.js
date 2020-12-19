import React, {useState, useEffect} from 'react';
import './App.css';
import Info from './components/Info';
import Background from './components/Background';
import Loading from './components/Loading';
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
      try {
        const coords = await getUserCoords();
        const rawWeatherData = await getWeatherData(coords);
        setWeatherData({
          temp: Math.round(rawWeatherData.main.temp),
          description: rawWeatherData.weather[0].description,
          id: rawWeatherData.weather[0].id,
        });
        setLocationData({
          placeName: rawWeatherData.name,
          userCoords: coords,
        });
        const graphicData = getGraphicData(rawWeatherData.weather[0].id);
        // const graphicData = getGraphicData(701); 
        setGraphicData(graphicData);
        const theme = getTheme(rawWeatherData.sys.sunset);
        setTheme(theme);
      } catch(e) {
        console.log(e);
        // how to render the error on the screen to user?
      }
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
      return coords;
  }
  
  const getWeatherData = async (coords) => {
      const response = await fetch(`/.netlify/functions/getWeather?lat=${coords.lat}&lon=${coords.lng}`);
      if (!response.ok) throw new Error(`Couldn't get weather data`);
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

  const weatherUI = (
    <div className='App'>
      <Background theme={theme} graphicData={graphicData}/>
      <Info theme={theme} weatherData={weatherData} locationData={locationData} graphicData={graphicData}/>
      <Graphic theme={theme} graphicData={graphicData}/>
    </div>
  )

  const loadingUI = (
    <div className='App'>
      <Loading />
    </div>
  )

  return (locationData && weatherData && graphicData && theme) ?
    weatherUI : loadingUI

}

export default App;
