import React from 'react';
import './Graphic.css';
import renderData from './renderData.js';
import Clouds from './Clouds';
import Precipitation from './Precipitation';
import Lightning from './Lightning';
import Rock from './Rock';

const Graphic = ({ weatherData, theme }) => {
    let data;
    let render = [];
    if (weatherData) {
        // const weatherId = weatherData.id;
        // const data = renderData[weatherId];
        data = renderData[800];
        if (data.clouds) {
            render.push(<Clouds num={data.clouds} className="clouds"/>);
        }
        if (data.precipitation) {
            render.push(<Precipitation type={data.precipitation} className="precipitation"/>);
        }
        if (data.lightning) {
            render.push(<Lightning bolts={data.lightning} className="lightning"/>);
        } 
        // Rock
        if (data.rock) {
            if (theme === 'day' || theme === 'sunset') {
                render.push(<Rock type="sun" className="sun"/>);
            } else {
                render.push(<Rock type="moon" className="moon"/>);
            }
        }
    }

    console.log(render);

    return (
        <div className='Graphic'>
            {render}
        </div>
    )
}

export default Graphic