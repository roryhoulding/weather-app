/*
[weatherId]: {
        clouds: 1 (single cloud) / 2 (scattered) / 3 (triple) / 0
        precipitation: rain / drizzle / sleet / snow / null
        lightning: 1 / 2 / 0
        rock: true / false
        specialImg: tornado / volcano
        text: {
            effect: blur / whoosh / null
            color: {
                day: orange / blue
                night: white
                sunset: orange
            }
        },
        bg: {
            type: gradient / plain
            color: {
                day: yellow / blue
                night: purple / purple-haze
                sunset: orange
            },
        },
    },
*/

const renderData = {
    200: {
        clouds: 3,
        precipitation: 'rain', 
        lightning: 1,
        rock: false,
        text: {
            effect: null,
            color: {
                day: 'blue',
                night: 'white',
                sunset: 'white',
            }
        },
        bg: {
            type: 'gradient',
            color: {
                day: 'blue',
                night: 'purple',
                sunset: 'orange',
            },
        },
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
        text: {
            effect: null,
            color: {
                day: 'blue',
                night: 'white',
                sunset: 'white',
            }
        },
        bg: {
            type: 'gradient',
            color: {
                day: 'blue',
                night: 'purple',
                sunset: 'orange',
            },
        },
    },
    211: {
        redirect: 210,
    },
    212: {
        clouds: 3,
        precipitation: null, 
        lightning: 2,
        rock: false,
        text: {
            effect: null,
            color: {
                day: 'blue',
                night: 'white',
                sunset: 'white',
            }
        },
        bg: {
            type: 'gradient',
            color: {
                day: 'blue',
                night: 'purple',
                sunset: 'orange',
            },
        },
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
        text: {
            effect: null,
            color: {
                day: 'blue',
                night: 'white',
                sunset: 'white',
            }
        },
        bg: {
            type: 'gradient',
            color: {
                day: 'blue',
                night: 'purple',
                sunset: 'orange',
            },
        },
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
        text: {
            effect: null,
            color: {
                day: 'blue',
                night: 'white',
                sunset: 'white',
            }
        },
        bg: {
            type: 'gradient',
            color: {
                day: 'blue',
                night: 'purple',
                sunset: 'orange',
            },
        },
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
        text: {
            effect: null,
            color: {
                day: 'blue',
                night: 'white',
                sunset: 'white',
            }
        },
        bg: {
            type: 'gradient',
            color: {
                day: 'blue',
                night: 'purple',
                sunset: 'orange',
            },
        },
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
        text: {
            effect: null,
            color: {
                day: 'blue',
                night: 'white',
                sunset: 'white',
            }
        },
        bg: {
            type: 'gradient',
            color: {
                day: 'blue',
                night: 'purple',
                sunset: 'orange',
            },
        },
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
        text: {
            effect: null,
            color: {
                day: 'grey',
                night: 'white',
                sunset: 'white',
            }
        },
        bg: {
            type: 'gradient',
            color: {
                day: 'grey',
                night: 'purple',
                sunset: 'orange',
            },
        },
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
        text: {
            effect: null,
            color: {
                day: 'grey',
                night: 'white',
                sunset: 'white',
            }
        },
        bg: {
            type: 'gradient',
            color: {
                day: 'grey',
                night: 'purple',
                sunset: 'orange',
            },
        },
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
        text: {
            effect: 'blur',
            color: {
                day: 'grey',
                night: 'white',
                sunset: 'white',
            }
        },
        bg: {
            type: 'gradient',
            color: {
                day: 'grey',
                night: 'purple-haze',
                sunset: 'orange-haze',
            },
        },
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
    762: {
        specialImg: 'volcano',
        text: {
            effect: 'whoosh',
            color: {
                day: 'brown',
                night: 'white',
                sunset: 'white',
            }
        },
        bg: {
            type: 'plain',
            color: {
                day: 'earth',
                night: 'purple-haze',
                sunset: 'orange-haze',
            },
        },
    },
    781: {
        specialImg: 'tornado',
        text: {
            effect: 'whoosh',
            color: {
                day: 'brown',
                night: 'white',
                sunset: 'white',
            }
        },
        bg: {
            type: 'plain',
            color: {
                day: 'earth',
                night: 'purple-haze',
                sunset: 'orange-haze',
            },
        },
    },
    800: {
        clouds: null,
        precipitation: null, 
        lightning: 0,
        rock: true,
        text: {
            effect: null,
            color: {
                day: 'orange',
                night: 'white',
                sunset: 'white',
            }
        },
        bg: {
            type: 'gradient',
            color: {
                day: 'yellow',
                night: 'purple',
                sunset: 'orange',
            },
        },
    },
    801: {
        clouds: 1,
        precipitation: null, 
        lightning: 0,
        rock: true,
        text: {
            effect: null,
            color: {
                day: 'orange',
                night: 'white',
                sunset: 'white',
            }
        },
        bg: {
            type: 'gradient',
            color: {
                day: 'yellow',
                night: 'purple',
                sunset: 'orange',
            },
        },
    },
    802: {
        clouds: 2,
        precipitation: null, 
        lightning: 0,
        rock: true,
        text: {
            effect: null,
            color: {
                day: 'blue',
                night: 'white',
                sunset: 'white',
            }
        },
        bg: {
            type: 'gradient',
            color: {
                day: 'blue',
                night: 'purple',
                sunset: 'orange',
            },
        },
    },
    803: {
        clouds: 3,
        precipitation: null, 
        lightning: 0,
        rock: false,
        text: {
            effect: null,
            color: {
                day: 'blue',
                night: 'white',
                sunset: 'white',
            }
        },
        bg: {
            type: 'gradient',
            color: {
                day: 'blue',
                night: 'purple',
                sunset: 'orange',
            },
        },
    },
    804: {
        redirect: 803,
    },
}

export default renderData;