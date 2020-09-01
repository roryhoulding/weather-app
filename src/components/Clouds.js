import React from 'react';
import { ReactComponent as Cloud } from '../img/clouds-1.svg';
import { ReactComponent as TripleClouds } from '../img/clouds-3.svg';
import { ReactComponent as ScatteredClouds } from '../img/clouds-scattered.svg';

const Clouds = ({ num }) => {
    let svg;
    if (num === 1) {
        svg = <Cloud />
    } else if (num === 2) {
        svg = <ScatteredClouds />
    } else if (num === 3) {
        svg = <TripleClouds />
    }

    return (
        <div className="Clouds">
            {svg}
        </div>
    )
}

export default Clouds;