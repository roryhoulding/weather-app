import React from 'react';

// SVGs
import { ReactComponent as CloudLight } from '../img/cloud-light.svg';
import { ReactComponent as CloudMid } from '../img/cloud-mid.svg';
import { ReactComponent as CloudDark } from '../img/cloud-dark.svg';

// Styles
import './Loading.css';

const Loading = () => {
    return (
        <div className="Loading">
            <div className='clouds'>
                <CloudDark />
                <CloudMid />
                <CloudLight />
            </div>
            <p>Checking the weather...</p>
        </div>
    )
}

export default Loading