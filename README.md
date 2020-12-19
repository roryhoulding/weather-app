# What's with the weather?

What's with the weather is a tiny weather app I made whilst learning React. 

See it in action -> [whats-with-the-weather.netlify.app](http://whats-with-the-weather.netlify.app/)

In a nutshell it: 
- Gets the users location coordinates using geolocation from the [Navigator Web API](https://developer.mozilla.org/en-US/docs/Web/API/Navigator).
- Uses those coordinates to fetch the weather from the [Open Weather API](https://openweathermap.org/api). It does this via a [Netlify function](https://www.netlify.com/products/functions/) to hide the API app id.
- Uses the weather response to generate a graphic based on the weather ID. 
- Renders the graphic, location, temperature and weather description. 

![Four examples of the app](./README/header.png)
![Examples of the weather graphic data](./README/data.png)
![Examples of the modular assets](./README/themes.png)
![All of the graphic assets](./README/assets.png)
![Example of grid at sunset](./README/sunset-example.png)
![Example of grid at night](./README/moon-example.png)
![Example showing different renderings depending on the time of day](./README/time-of-day-example.png)
![Example response, highlighting the weather ID](./README/id-in-response.png)