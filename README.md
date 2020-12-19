# What's with the weather?

![Four examples of the app](./README/header.png)

What's with the weather is a tiny app I made whilst learning React.

See it in action -> [whats-with-the-weather.netlify.app](http://whats-with-the-weather.netlify.app/)

### In a nutshell, it: 
- Gets the users location coordinates using geolocation from the [Navigator Web API](https://developer.mozilla.org/en-US/docs/Web/API/Navigator).
- Uses those coordinates to fetch the weather from the [Open Weather API](https://openweathermap.org/api). It does this via a [Netlify function](https://www.netlify.com/products/functions/) to hide the API app id.
- Uses the weather response to generate a graphic from different combinations of react components based on the weather ID. The data for each graphic is stored in a hardcoded object of objects.
- Renders the graphic, location, temperature and weather description. 

### A bit more detail: 
The ID in the Weather API response is used to generate a graphic.
![Example response, highlighting the weather ID](./README/id-in-response.png)

The weather ID is used to lookup an object in a [harcoded file](./src/data/graphicData.js). This object contains information about which react components to render depending on the time of day and the weather ID. This meant I needed only 15 assets to render all of the 50+ variations. 
![Examples of the weather graphic data](./README/data.png)

Example of the same weather ID at different times of the day:
![Example showing different renderings depending on the time of day](./README/time-of-day-example.png)

All of the assets:
![All of the graphic assets](./README/assets.png)

The graphic is generated based on a 12x12 grid, with each component always rendering in the same location if it is rendered. 
![Example of grid at sunset](./README/sunset-example.png)
![Example of grid at night](./README/moon-example.png)