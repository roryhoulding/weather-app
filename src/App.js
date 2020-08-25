import React, {useState} from 'react';
import './App.css';

function App() {
  const [temp, setTemp] = useState(0);
  const [desc, setDesc] = useState("");
  const [location, setLocation] = useState("london");

  const getWeatherData = async (location) => {
    const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=78a6f0b5063156d4999c4ecb12d3b6af&units=metric`)
    const data = await response.json();
    setTemp(data.main.temp);
    setDesc(data.weather[0].description);
  }

  getWeatherData(location);

  return (
    <div className="App">
      <h1>{temp}</h1>
      <h5>{desc}</h5>
    </div>
  );
}

export default App;
