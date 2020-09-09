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
- [x] Succesfully load weather data and moon or sun image depending on theme
- [x] Render multiple parts of an image
- [x] Next: work out how to do render += so can add more than one svg to the render
    E.g. clouds 
- [x] Render multiple parts of an image based on object properties
- [x] Redesign graphics based on a grid
- [x] Render different weather types given an id and a theme
- [x] CSS stylings for the parts of an image
- [x] Render full screen specials
- [x] Add special text effects to tornado and mist
- [x] Link up the background colour to the theme given theme and weather id
- [x] Rock position so that sun is at bottom when it's sunset (probably just a class called sunset that changes position of rock)
- [-] Perhaps set a global css theme on the app div then style text, background etc based on that
- [x] Text color
- [x] Redo colours so that they are nicer (programatically generate them?)
- [x] Update all graphicData.js to include text and background properties
- [x] Is there a way to apply the same objet to multiple ID's? (to avoid repetition)
- [x] Set graphic data back to auto determined (not hard coded)
- [x] Capitalise the first letter of the description
- [x] Error handling for API (learn about this too)
- [ ] Deploy to GitHub pages

## Bugs
- [x] Sun should cut off and sit in right hand corner (bottom and top)
- [x] Moon position top right
- [x] Lightning bolt positions
- [x] Scattered clouds position
- [ ] Each child in list should have unique key
- [?] CSS layout bug where rain and clouds cut off on right hand side in Chrome (because the app is wider than the device)

## Future improvements
- 3 cloud colours
- Add a 'use my location' button in the middle of the screen and loading state
- Write custom descriptions
- Allow users to search for an area
- Allow users to change celcius to farenheight
- Have multiple different images as the sun goes down/comes up (rather than just one)
- Use React Native to deploy mobile app
- Colour of Tornado and Volcanic Ash changes for day/night/sunset
- Use React error boundaries

## Log errors
- [x] Weather type not found in graphic data
    - [x] Not really an error, just don't show a graphic
    - [x] Do show temp, location, description and blue background (default)
- [x] Couldn't get user location or co-ordinates
~~- [ ] Taking too long to get a response from the API~~
- [x] Error from weather API

## Display error to user
- [ ] Couldn't get location
- [ ] Something went wrong with the weather API