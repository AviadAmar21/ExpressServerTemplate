'use strict';

const tableName = 'profiles',
    database = require('../../middleware/database');

module.exports = {
    selectProfiles,
    insertProfiles
}

async function selectProfiles(query) {
    let profiles = await database.select(tableName);
    if (query.priceIsGreater) {
        profiles = profiles.filter(profile => profile.price >= query.priceIsGreater);
    }

    if (query.priceIsLower) {
        profiles = profiles.filter(profile => profile.price < query.priceIsLower);
    }
    return profiles;

}

function insertProfiles(profile) {
    return database.insert(tableName, profile)


}