- Plan the features on paper (e.g. write down show current location with nice image)
- Design
- Psuedo code the logic and react components
- Research API's and how to get the data (e.g. do i go with Google Geocoding for reverse geocoding or )
- Mess around with API's and proof of concept in a react app
- E.g. getting location, then converting to city, then using to get the weather app Open Cage Data, which gives me a nicer and more consisten locale? Open Cage is good for Europe but not Africa. Considerations - data structure / how easy to use (Open Cage is better because google has array of types) and quality of data (Google seems more consisten from some samples, e.g. not 'central' as area). Went with Open Cage Data because it's free. 
- Then worrying about bugs and error handling


- Considering how to set up rendering of different backgrounds:
    - Could set up with css file and styles with colurs coded in CSS
    - Or could set up with array of css settings then use CSS in JS