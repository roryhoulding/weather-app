import React from 'react';
import { ReactComponent as Rain } from '../img/rain.svg';
import { ReactComponent as Drizzle } from '../img/drizzle.svg';
import { ReactComponent as Sleet } from '../img/sleet.svg';
import { ReactComponent as Snow } from '../img/snow.svg';

const Precipitation = ({ type }) => {
    let svg;
    if (type === "rain") {
        svg = <Rain className="Precipitation"/>
    } else if (type === "drizzle") {
        svg = <Drizzle className="Precipitation"/>
    } else if (type === "sleet") {
        svg = <Sleet className="Precipitation"/>
    } else if (type === "snow") {
        svg = <Snow className="Precipitation"/>
    }

    return (
        <div className="Precipitation">
            {svg}
        </div>
    )
}

export default Precipitation;