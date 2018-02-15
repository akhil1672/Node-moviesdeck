const express=require('express');
const app=express.Router();

const getmovies=require('../services/getMovies');
const getmovie=require('../services/getMovie');
const addmovie=require('../services/addMovie');
const updatemovie=require('../services/updateMovie');

app.get('/movies',async (request,response,next)=>{
    try{
        let res= await getmovies.getMovies();
        console.log("Fetched movies from database");
        response.json(res);
    }
    catch(err){
        console.error("Error fetching movies from service");
    }
})

app.get('/movies/:Id',async (request,response,next)=>{
    let movieid=request.params.Id;
    try{
        let res=await getmovie.getMovie(movieid);
        console.log("Fetched the movie with id "+movieid);
        response.json(res);
    }
    catch(err){
        console.error("Error fetching the movie "+moviename);
    }
})

app.post('/movies', async (request, response, next) => {
    let movie = request.body;
    try {
        let res = await addmovie.addMovie(movie);
        console.log("Added the movie with name " + movie.Name);
        response.json(res);
    }
    catch (err) {
        console.error("Error adding the movie " + movie.Name);
    }
})

app.put('/movies/:Name', async function (request, response, next) {
    let movie = request.body;
    console.log(movie);
    let moviename = request.params.Name;
    console.log(moviename);
    try {
        let movie = await updatemovie.updateMovie(moviename, movie);
        response.json(movie);
    }
    catch (err) {
        next('error');
    }
})

// app.delete('/movies/:name', async function (request, response, next) {
//     let moviename = request.params.name;
//     try {
//         let movie = await deletemovie.deleteMovie(moviename);
//         response.json(movie);
//     }
//     catch (err) {
//         console.error(err);
//         next('error');
//     }
// })

module.exports=app;