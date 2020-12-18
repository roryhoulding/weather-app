exports.handler = async event => {
  return {
    status: 200,
    body: process.env.WEATHER_APP_ID,
  }
}