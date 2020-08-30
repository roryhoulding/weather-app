## Designs
https://www.figma.com/file/DhJ3g5lQlRn77AoRO3vNBv/Weather?node-id=0%3A1

## V1 Psuedo 
- Get the users current location via browser
    - Geo lat and long
    - Convert lat and long to city / area (reverse geocode)
        - Geonames API, Google API, npm package?
        - https://opencagedata.com/api
        - Hierarchy: Suburb, City, County
        - Should confidence be factored in? 
        - Should i show road? No, presumably more likely to be wrong
    - Handle errors
- Get the current weather in the users location
- Get the current time
- Pick the weather image to show based on weather type
- State:
    - weatherData = {
        temp,
        description,
        weatherTypeId,
        weatherCoords,
    }
    - locationData = {
        placeName,
        sunrise,
        sunset,
        userCoords: coords,
      }
    - Time
    - Img url
- Components:
    - information 
        - temp
        - description
        - location
    - image
    - background (?)

## Style
- 3 components, background, image and info

## Todo
- Succesfully loading weather data and moon or sun image depending on theme
- Next: work out how to do render += so can add more than one svg to the render
    E.g. clouds 
- Render different weather types given an id and a theme
- Link up the background colour to the theme given theme and weather id

## Future improvements
- Add a 'use my location' button in the middle of the screen and loading state
- Add timeout to geolocation if it takes too long
- How to not have a flash when loading state for first time
- Write custom descriptions
- Allow users to search for an area
- Have multiple different images as the sun goes down/comes up (rather than just one)