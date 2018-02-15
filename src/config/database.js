//Importing the environment config module
require('dotenv').config();

//importing the mongodb module
const mongo= require('mongodb').MongoClient;

//Mongodb url port 
const url= process.env.MONGO_DB_URL;

//exporting the database function
module.exports=function calldb(){
    return new Promise((resolve,reject)=>{
        mongo.connect(url,(err,database)=>{
            if(err){
                console.error("Error connecting to database");
                reject(err);
            }
            else{
                console.log("Database connection activated");
                resolve(database);
            }
        })
    })
}