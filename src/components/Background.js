import React from 'react';
import './Background.css'
import renderData from './renderData.js';

const Background = ({ type, theme, weatherData }) => {
    let data = weatherData ? weatherData : {};
    // const weatherId = weatherData.id;
    // const data = renderData[weatherId];
    data = renderData[201];

    if (type === 'gradient') {
        return (
            <div className={`bg ${type} ${data.bg[theme]}`}>
                <div className="top"></div>
                <div className="middle"></div>
                <div className="main"></div>
            </div>
        )
    } else if (type === 'plain'){
        return (
            <div className={`bg ${type} ${theme}`}>
                <div className="main"></div>
            </div>
        )
    }
}

export default Background;