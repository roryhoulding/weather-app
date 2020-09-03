import React from 'react';
import './Info.css';

const createWhoosh = (description) => {
    let whoosh = [];
    for (let c of description) {
        whoosh.push(<span>{c}</span>)
    }
    return whoosh;
}

const Info = ({theme, locationData, weatherData, graphicData}) => {
    if (locationData && weatherData && graphicData) {
        const textEffect = graphicData.text.effect;
        const description = textEffect === 'whoosh' ? createWhoosh(weatherData.description) : weatherData.description;
        const textColor = graphicData.text.color[theme];
        return (
            <section className={`Info ${textEffect ? `text-${textEffect}` : ''} text-${textColor}`}>
                <h1 className='temp'>{weatherData.temp}°</h1>
                <p className='description'>{description}</p>
                <p className='place'>{locationData.placeName}</p>
            </section>
        )
    } else {
        return (
            <>
                <h1>Loading...</h1>
            </>
        )
    }
}

export default Info;