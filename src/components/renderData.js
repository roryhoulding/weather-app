/*
[weatherId]: {
        clouds: 1 / 3 / 0 or undefined,
        precipitation: rain / drizzle / sleet / snow / or undefined, 
        lightning: 1 / 2 / 0 or undefined,
        rock: true / false or undefined
        bg: {
            day: 'yellow' / 'blue' / ,
            night: 'purple' / 'purple-haze',
            sunset: 'orange'
        }
    },
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