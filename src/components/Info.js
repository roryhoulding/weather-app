import React from 'react';
import './Info.css';

const Info = ({theme, locationData, weatherData, graphicData}) => {

    // Splits description into <span> tags with invidicual chars
    // Used for the Whoosh text effect (tornado and volano weather)
    const createWhoosh = (description) => {
        let whoosh = [];
        for (let c of description) {
            whoosh.push(<span>{c}</span>)
        }
        return whoosh;
    }

    const toSentenceCase = (str) => {
        return str.slice(0,1).toUpperCase() + str.slice(1);
    }

    const textEffect = graphicData.text.effect;
    let description = toSentenceCase(weatherData.description);
    description = textEffect === 'whoosh' ? createWhoosh(description) : description;
    const textColor = graphicData.text.color[theme];
    return (
        <section className={`Info ${textEffect ? `text-${textEffect}` : ''} text-${textColor}`}>
            <h1 className='temp'>{weatherData.temp}°</h1>
            <p className='description'>{description}</p>
            <p className='place'>{locationData.placeName}</p>
        </section>
    )
}

export default Info;