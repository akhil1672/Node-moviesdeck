/*Accessing Node modules*/
require('dotenv').config();
const express= require('express');
const cors=require('cors');
const app=express();
const body=require('body-parser');
const helmet=require('helmet');

//Importing the routes
const routes=require('./src/routes/movieroutes');

//using middlewares
app.use(cors());
app.use(helmet());
app.use(body.json());
app.use(body.urlencoded());

app.use('/api',routes);

const port = process.env.PORT || 3000;

//Starting the server
app.listen(port,()=>{
    console.log("Server started at port "+port);
})

module.exports=app;