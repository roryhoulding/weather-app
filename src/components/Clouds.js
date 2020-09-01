import React from 'react';
import { ReactComponent as Cloud } from '../img/clouds-1.svg';
import { ReactComponent as TripleClouds } from '../img/clouds-3.svg';
import { ReactComponent as ScatteredClouds } from '../img/clouds-scattered.svg';

const Clouds = ({ num }) => {
    if (num === 1) {
        return <Cloud />
    } else if (num === 2) {
        return <ScatteredClouds />
    } else if (num === 3) {
        return <TripleClouds />
    }
}

export default Clouds;