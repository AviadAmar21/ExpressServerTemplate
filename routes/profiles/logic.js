'use strict';

const dataQueries = require('./data-queries');

module.exports = {
    getProfiles,
    createProfile
}

async function getProfiles(query) {
    let profiles = await dataQueries.selectProfiles(query);
    return {
        profiles,
        total: profiles.length
    }


}

function createProfile(profile) {
    return dataQueries.insertProfiles(profile);
}