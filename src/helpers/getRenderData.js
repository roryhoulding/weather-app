import renderData from '../data/renderData.js';

const getRenderData = (id) => {
    if (renderData[id].redirect) {
        const redirectId = renderData[id].redirect;
        return renderData[redirectId];
    } else {
        return renderData[id];
    }
}

export default getRenderData;