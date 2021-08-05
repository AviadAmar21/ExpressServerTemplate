'use strict';

const tableName = 'profiles',
    database = require('../../../middleware/database');

module.exports = {
    selectProfile,
    updateProfile,
    removeProfile
}

function selectProfile(id) {
    return database.select(tableName, id);
}

function updateProfile(id, profile) {
    return database.update(tableName, id, profile);

}

function removeProfile(id) {
    return database.remove(tableName, id);
}