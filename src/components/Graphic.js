import React from 'react';
import './Graphic.css';
import Clouds from './Clouds';
import Precipitation from './Precipitation';
import Lightning from './Lightning';
import Rock from './Rock';
import getRenderData from '../helpers/getRenderData';

const Graphic = ({ weatherData, theme }) => {
    let graphicComponents = [];
    if (weatherData) {
        const weatherId = weatherData.id;
        const renderData = getRenderData(weatherId);
        if (renderData.clouds) {
            graphicComponents.push(<Clouds num={renderData.clouds} className="clouds"/>);
        }
        if (renderData.precipitation) {
            graphicComponents.push(<Precipitation type={renderData.precipitation}/>);
        }
        if (renderData.lightning) {
            graphicComponents.push(<Lightning bolts={renderData.lightning}/>);
        } 
        if (renderData.rock) {
            if (theme === 'day' || theme === 'sunset') {
                graphicComponents.push(<Rock type="sun"/>);
            } else if (theme === 'night') {
                graphicComponents.push(<Rock type="moon" className="moon"/>);
            }
        }
    }

    return (
        <div className='Graphic'>
            {graphicComponents}
        </div>
    )
}

export default Graphic