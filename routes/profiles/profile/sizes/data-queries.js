'use strict';

const tableName = 'profiles',
    database = require('../../../../middleware/database');

module.exports = {
    selectSizes

}

async function selectSizes(id) {
    let profile = await database.select(tableName, id);
    return profile[0].size;
}

