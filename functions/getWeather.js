exports.handler = async event => {
  return {
    status: 200,
    body: env.WEATHER_APP_ID,
  }
}