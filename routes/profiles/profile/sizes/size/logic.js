'use strict';

const sizesDataQueries = require('../data-queries'),
    dataQueries = require('./data-queries')

module.exports = {
    getSize,
    updateSize

}

async function getSize(id, sizeType) {
    let sizes = await sizesDataQueries.selectSizes(id);
    let result = {};
    result[sizeType] = sizes[sizeType];
    return result;


}

async function updateSize(id, data) {

    // return dataQueries.updateSize(id,data);
    let sizes = await sizesDataQueries.selectSizes(id);
    // for (let key in data) {
    //     if (sizes[key]) {
    //         sizes[key] = data[key];
    //     }
    // }
    Object.assign(sizes,data);

    return dataQueries.updateSize(id, sizes);

}