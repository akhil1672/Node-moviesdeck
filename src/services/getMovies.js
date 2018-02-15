const database=require('../config/database');
let db;

async function connectdb(){
    try{
        db=await database();
    }
    catch(err){
        console.error(err);
    }
}

connectdb();

function getMovies(){
    return new Promise((res,rej)=>{
        db.collection('movies').find({}).toArray((err,movies)=>{
            if(err){
                console.error("Could not fetch movies");
                rej(err);
            }
            else{
                res(movies);
            }
        })
    })
}

module.exports.getMovies=getMovies;