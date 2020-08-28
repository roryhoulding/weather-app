import React from 'react';
import './Background.css'

const Background = ({ type, theme }) => {
    if (type === 'gradient') {
        return (
            <div className={`bg ${type} ${theme}`}>
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