import React from 'react';
import { ReactComponent as Cloud } from '../img/clouds-1.svg';
import { ReactComponent as TripleClouds } from '../img/clouds-3.svg';
import { ReactComponent as ScatteredClouds } from '../img/clouds-scattered.svg';

const Clouds = ({ num }) => {
    let svg;
    if (num === 1) {
        svg = <Cloud className="Clouds-1"/>
    } else if (num === 2) {
        svg = <ScatteredClouds className="Clouds-2"/>
    } else if (num === 3) {
        svg = <TripleClouds className="Clouds-3"/>
    }

    return (
        <>
            {svg}
        </>
    )
}

export default Clouds;