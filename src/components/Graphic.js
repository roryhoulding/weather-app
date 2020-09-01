import React from 'react';
import './Graphic.css';
import renderData from './renderData.js';
import Clouds from './Clouds';
import Precipitation from './Precipitation';
import Lightning from './Lightning';
import Rock from './Rock';

const Graphic = ({ weatherData, theme }) => {
    let data = weatherData ? weatherData : {};
    let graphicComponents = [];
    // const weatherId = weatherData.id;
    // const data = renderData[weatherId];
    data = renderData[201];
    if (data.clouds) {
        graphicComponents.push(<Clouds num={data.clouds} className="clouds"/>);
    }
    if (data.precipitation) {
        graphicComponents.push(<Precipitation type={data.precipitation}/>);
    }
    if (data.lightning) {
        graphicComponents.push(<Lightning bolts={data.lightning}/>);
    } 
    if (data.rock) {
        if (theme === 'day' || theme === 'sunset') {
            graphicComponents.push(<Rock type="sun"/>);
        } else if (theme === 'night') {
            graphicComponents.push(<Rock type="moon" className="moon"/>);
        }
    }

    return (
        <div className='Graphic'>
            {graphicComponents}
        </div>
    )
}

export default Graphic