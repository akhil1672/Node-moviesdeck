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

function addMovie(movie){
    return new Promise((res,rej)=>{
        db.createCollection('movies',{strict:true},function(err){
            db.collection('movies').insertOne(movie,(err,movies)=>{
                if(err){
                    console.error("Could not fetch movies");
                    rej(err);
                }
                else{
                    res(movies);
                }
            })    
        })
    })
}

module.exports.addMovie=addMovie;