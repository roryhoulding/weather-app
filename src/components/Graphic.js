import React from 'react';
import './Graphic.css';
import renderData from './renderData.js';
import { ReactComponent as Sun } from '../img/sun.svg';
import { ReactComponent as Moon } from '../img/moon.svg';

const Graphic = ({ weatherData, theme }) => {
    let data;
    let render = '';
    if (weatherData) {
        // const weatherId = weatherData.id;
        // const data = renderData[weatherId];
        data = renderData[800];
        // Clouds
        if (data.rock) {
            if (theme === 'day' || theme === 'sunset') {
                render = <Sun />
            } else {
                render = <Moon />
            }
        }
        // Precipitation

        // Lightning

        // Rock
    }

    console.log(render);

    return (
        <div className='Grahpic'>
            {render}
        </div>
    )
}

export default Graphic