const fetch = require('node-fetch');

const { WEATHER_APP_ID } = process.env;

exports.handler = async (event) => {
  const { lat, lon } = event.queryStringParameters;
  const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_APP_ID}&units=metric`);
  const data = await response.json();
  return {
    statusCode: response.status,
    body: JSON.stringify(data),
  }
}