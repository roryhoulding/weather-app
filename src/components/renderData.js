/*
[weatherId]: {
        clouds: 1 / 2 / 3 / 0 or undefined, 1 is single, 2 is scatterd, 3 is tri ple
        precipitation: rain / drizzle / sleet / snow / or undefined, 
        lightning: 1 / 2 / 0 or undefined,
        rock: true / false or undefined
        bg: {
            day: 'yellow' / 'blue' / ,
            night: 'purple' / 'purple-haze',
            sunset: 'orange'
        }
    },

TODO 
- [ ] Add a background type gradient or 
*/

const renderData = {
    201: {
        clouds: 3,
        precipitation: 'rain', 
        lightning: 1,
        rock: false,
        bg: {
            day: 'blue',
            night: 'purple',
            sunset: 'orange'
        }
    },
    800: {
        clouds: null,
        precipitation: null, 
        lightning: 0,
        rock: true,
        bg: {
            day: 'yellow',
            night: 'purple',
            sunset: 'orange'
        }
    }
}

export default renderData;