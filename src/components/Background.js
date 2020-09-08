import React from 'react';
import './Background.css'

const Background = ({ theme, graphicData }) => {
    const bg = graphicData.bg;
    if (bg.type === 'gradient') {
        return (
            <div className={`Background ${bg.type} ${bg.color[theme]}`}>
                <div className="top"></div>
                <div className="middle"></div>
                <div className="main"></div>
            </div>
        )
    } else if (bg.type === 'plain'){
        return (
            <div className={`Background ${bg.type} ${bg.color[theme]}`}>
                <div className="main"></div>
            </div>
        )
    }
    
    return (
        <div className={`Background`}></div>
    )
}

export default Background;