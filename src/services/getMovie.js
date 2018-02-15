const database = require('../config/database');
let ObjectId = require('mongodb').ObjectID
let db;

async function connectdb() {
    try {
        db = await database();
    }
    catch (err) {
        console.error(err);
    }
}

connectdb();

function getMovie(movieid) {
    return new Promise((res, rej) => {
        db.collection('movies').findOne({ _id: ObjectId(movieid) }, (err, movie) => {
            if (err) {
                console.error(err);
            }
            else {
                console.log(movie);
                res(movie);
            }
        })
    })
}

module.exports.getMovie = getMovie;