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
    200: {
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
    201: {
        redirect: 200,
    },
    202: {
        redirect: 200,
    },
    210: {
        clouds: 3,
        precipitation: null, 
        lightning: 1,
        rock: false,
        bg: {
            day: 'blue',
            night: 'purple',
            sunset: 'orange'
        }
    },
    211: {
        redirect: 210,
    },
    212: {
        clouds: 3,
        precipitation: null, 
        lightning: 2,
        rock: false,
        bg: {
            day: 'blue',
            night: 'purple',
            sunset: 'orange'
        }
    },
    221: {
        redirect: 212,
    },
    230: {
        redirect: 200,
    },
    231: {
        redirect: 200,
    },
    232: {
        redirect: 200,
    },
    300: {
        clouds: 3,
        precipitation: 'drizzle', 
        lightning: 0,
        rock: false,
        bg: {
            day: 'blue',
            night: 'purple',
            sunset: 'orange'
        }
    },
    301: {
        redirect: 300,
    },
    302: {
        redirect: 300,
    },
    310: {
        redirect: 300,
    },
    311: {
        redirect: 300,
    },
    312: {
        clouds: 3,
        precipitation: 'rain', 
        lightning: 0,
        rock: false,
        bg: {
            day: 'blue',
            night: 'purple',
            sunset: 'orange'
        }
    },
    313: {
        redirect: 312,
    },
    314: {
        redirect: 312,
    },
    321: {
        redirect: 312,
    },
    500: {
        clouds: 1,
        precipitation: 'rain', 
        lightning: 0,
        rock: true,
        bg: {
            day: 'blue',
            night: 'purple',
            sunset: 'orange'
        }
    },
    501: {
        redirect: 500,
    },
    502: {
        redirect: 500,
    },
    503: {
        redirect: 500,
    },
    504: {
        redirect: 500,
    },
    520: {
        clouds: 3,
        precipitation: 'rain', 
        lightning: 0,
        rock: false,
        bg: {
            day: 'blue',
            night: 'purple',
            sunset: 'orange'
        }
    },
    521: {
        redirect: 520,
    },
    522: {
        redirect: 520,
    },
    531: {
        redirect: 520,
    },
    600: {
        clouds: 3,
        precipitation: 'snow', 
        lightning: 0,
        rock: false,
        bg: {
            day: 'grey',
            night: 'purple',
            sunset: 'orange'
        }
    },
    601: {
        redirect: 600,
    },
    602: {
        redirect: 600,
    },
    611: {
        clouds: 3,
        precipitation: 'sleet', 
        lightning: 0,
        rock: false,
        bg: {
            day: 'grey',
            night: 'purple',
            sunset: 'orange'
        }
    },
    612: {
        redirect: 611,
    },
    613: {
        redirect: 611,
    },
    615: {
        redirect: 611,
    },
    616: {
        redirect: 611,
    },
    620: {
        redirect: 600,
    },
    621: {
        redirect: 600,
    },
    622: {
        redirect: 600,
    },
    701: {
        clouds: 0,
        precipitation: null, 
        lightning: 0,
        rock: false,
        bg: {
            day: 'grey',
            night: 'purple',
            sunset: 'orange'
        }
    },
    711: {
        redirect: 701,
    },
    721: {
        redirect: 701,
    },
    741: {
        redirect: 701,
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
    },
    801: {
        clouds: 1,
        precipitation: null, 
        lightning: 0,
        rock: true,
        bg: {
            day: 'yellow',
            night: 'purple',
            sunset: 'orange'
        }
    },
    802: {
        clouds: 2,
        precipitation: null, 
        lightning: 0,
        rock: true,
        bg: {
            day: 'blue',
            night: 'purple',
            sunset: 'orange'
        }
    },
    803: {
        clouds: 3,
        precipitation: null, 
        lightning: 0,
        rock: false,
        bg: {
            day: 'blue',
            night: 'purple',
            sunset: 'orange'
        }
    },
    804: {
        redirect: 803,
    },
}

export default renderData;