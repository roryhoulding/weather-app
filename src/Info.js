import React from 'react';

const Info = ({locationData, weatherData}) => {
    if (locationData && weatherData) {
        return (
            <>
                <h1>{weatherData.temp}°</h1>
                <h4>{weatherData.description}</h4>
                <h4>{locationData.placeName}</h4>
            </>
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