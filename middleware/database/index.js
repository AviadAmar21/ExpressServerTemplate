'use strict';

const fs = require('fs').promises,
    errorMessage = 'no such table';

module.exports = {
    select,
    insert,
    remove,
    update

}


async function select(tableName, id) {

    let db = await _readFile();
    if (!db[tableName]) {
        return {msg: errorMessage};
    }

    let arr = db[tableName];

    if (id) {
        arr = _searchById(arr, id);
    }
    return arr;

}

async function insert(tableName, profile) {

    let db = await _readFile();
    if (!db[tableName]) {
        return {msg: errorMessage};
    }

    profile.id = new Date().getTime();
    db[tableName].push(profile);
    _writeFile(db)
    return profile;
}

async function remove(tableName, id) {
    let db = await _readFile();
    if (!db[tableName]) {
        return {msg: errorMessage};
    }
    db[tableName] = db[tableName].filter(row => row.id !== id);
    _writeFile(db);
    return db[tableName];

}

async function update(tableName, profileId, profile) {
    let db = await _readFile();
    if (!db[tableName]) {
        return {msg: errorMessage};
    }

    let rows = db[tableName],
        flag = 0;
    for (let i = 0; i < rows.length && flag === 0; i++) {
        if (rows[i].id === profileId) {
            Object.assign(rows[i], profile);
            flag = 1;
        }
    }
    _writeFile(db);
    return rows;

}

function _searchById(arr, id) {
    return arr.filter(profile => profile.id === id);
}

async function _readFile() {
    let db = [];
    try {
        db = await fs.readFile(__dirname + '/db.txt', {encoding: 'utf-8', flag: 'r'});
        db = JSON.parse(db);
    } catch (err) {
        console.error(err)
    }

    return db;
}

function _writeFile(db) {
    try {
        db = JSON.stringify(db);
        fs.writeFile(__dirname + '/db.txt', db);
    } catch (err) {
        console.error(err)
    }

}