import React from 'react';
import './Background.css'
import getRenderData from '../helpers/getRenderData';

const Background = ({ type, theme, weatherData }) => {
    const weatherId = weatherData ? weatherData.id : 701;
    const renderData = getRenderData(weatherId);
    if (type === 'gradient') {
        return (
            <div className={`bg ${type} ${renderData.bg[theme]}`}>
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