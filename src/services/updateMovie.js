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

function updateMovie(movieid,updatemovie) {
    let mid=movieid;
    return new Promise((res, rej) => {
        db.collection('movies').updateOne({ _id: ObjectId(mid)},updatemovie,(err, movies) => {
                if (err) {
                    console.error(err);
                }
                else {
                    res(movies);
                }
            })
        })
}

module.exports.updateMovie = updateMovie;