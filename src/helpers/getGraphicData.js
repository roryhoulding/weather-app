import graphicData from '../data/graphicData.js';

const getGraphicData = (id) => {
    // If passed an ID that there is not data for in graphicData.js
    // (for example, if the weather codes are changed in the weather map API)
    // default to 999 (a plain blue background)
    id = graphicData[id] ? id : 999;

    // Lots of data has a redirect id to reduce repetition
    // If there is a redirect id, set id = redirect id
    id = graphicData[id].redirect ? graphicData[id].redirect : id;

    return graphicData[id]
}

export default getGraphicData;