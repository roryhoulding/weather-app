import graphicData from '../data/graphicData.js';

const getGraphicData = (id) => {
    if (graphicData[id].redirect) {
        const redirectId = graphicData[id].redirect;
        return graphicData[redirectId];
    } else {
        return graphicData[id];
    }
}

export default getGraphicData;