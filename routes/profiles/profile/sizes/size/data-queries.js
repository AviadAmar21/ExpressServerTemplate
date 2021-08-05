'use strict';

const tableName = 'profiles',
    database = require('../../../../../middleware/database');

module.exports = {
    updateSize

}

async function updateSize(id, data) {

    // let arr = database.select(tableName,id);
    // let profile = arr[0];
    // for (let key in profile) {
    //     if (typeof(profile[key]) == 'object') {
    //         for(let secondaryKey in profile[key]) {
    //             if (data[secondaryKey]) {
    //                 profile[key][secondaryKey] = data[key];
    //             }
    //         }
    //     }
    //
    //     else {
    //         if (data[key]) {
    //             profile[key] = data[key];
    //         }
    //     }
    //
    // }
    // return database.update(tableName,id,profile);

    let arr = await database.select(tableName, id);
    let profile = arr[0];
    Object.assign(profile.size, data);
    return database.update(tableName, id, profile);


}

