import React from 'react';
import './Info.css';

const Info = ({locationData, weatherData, theme, textEffect}) => {
    console.log(weatherData);
    if (locationData && weatherData) {
        return (
            <section className={`Info ${theme} ${textEffect ? textEffect : ''}`}>
                <h1 className='temp'>{weatherData.temp}°</h1>
                <p className='description'>{weatherData.description}</p>
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