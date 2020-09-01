import React from 'react';
import { ReactComponent as Rain } from '../img/rain.svg';
import { ReactComponent as Drizzle } from '../img/drizzle.svg';
import { ReactComponent as Sleet } from '../img/sleet.svg';
import { ReactComponent as Snow } from '../img/snow.svg';

const Clouds = ({ type }) => {
    if (type === "rain") {
        return <Rain />
    } else if (type === "drizzle") {
        return <Drizzle />
    } else if (type === "sleet") {
        return <Sleet />
    } else if (type === "snow") {
        return <Snow />
    }
}

export default Clouds;