'use strict';

const dataQueries = require('./data-queries');

module.exports = {
    getProfile,
    updateProfile,
    removeProfile
}

function getProfile(id) {
     return dataQueries.selectProfile(id);
}

function updateProfile(id,profile) {
    return dataQueries.updateProfile(id,profile);
}

function removeProfile(id) {
     return dataQueries.removeProfile(id);
}
