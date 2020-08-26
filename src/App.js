import React, {useState, useEffect} from 'react';
import './App.css';
import Info from './Info';

function App() {
  const [weatherData, setWeather] = useState(undefined);
  const [locationData, setLocationData] = useState(undefined);

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
      const temp = weatherResponse.main.temp;
      const description = weatherResponse.weather[0].description;
      const weatherTypeId = weatherResponse.weather[0].id;
      const weatherCoords = weatherResponse.coord;
      const weatherData = {
        temp,
        description,
        weatherTypeId,
        weatherCoords,
      }
      const sunrise = weatherResponse.sys.sunrise;
      const sunset = weatherResponse.sys.sunset;
      const placeName = weatherResponse.name;
      const locationData = {
        placeName,
        sunrise,
        sunset,
        userCoords: coords,
      }
      setWeather(weatherData);
      setLocationData(locationData);
    })();
  }, []);

  return (
    <div className="App">
        <Info weatherData={weatherData} locationData={locationData}/>
    </div>
  );
}

export default App;
