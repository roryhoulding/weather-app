import React from 'react';
import './Graphic.css';
import Clouds from './Clouds';
import Precipitation from './Precipitation';
import Lightning from './Lightning';
import Rock from './Rock';
import SpecialImg from './SpecialImg';

var hello = "hello";

const Graphic = ({ graphicData, theme }) => {
    let graphicComponents = [];
    if (graphicData.clouds) {
        graphicComponents.push(<Clouds key={graphicComponents.length} num={graphicData.clouds} className="clouds"/>);
    }
    if (graphicData.precipitation) {
        graphicComponents.push(<Precipitation key={graphicComponents.length} type={graphicData.precipitation}/>);
    }
    if (graphicData.lightning) {
        graphicComponents.push(<Lightning key={graphicComponents.length} bolts={graphicData.lightning}/>);
    } 
    if (graphicData.rock) {
        if (theme === 'day' || theme === 'sunset') {
            graphicComponents.push(<Rock key={graphicComponents.length} type="sun" theme={theme}/>);
        } else if (theme === 'night') {
            graphicComponents.push(<Rock key={graphicComponents.length} type="moon"/>);
        }
    }
    if (graphicData.specialImg) {
        graphicComponents.push(<SpecialImg key={graphicComponents.length} type={graphicData.specialImg}/>);
    }

    return (
        <div className='Graphic'>
            {graphicComponents}
        </div>
    )
}

export default Graphic