var express = require('express');
var router = express.Router();

const mysql = require('mysql');
const config = require('../config');
const connection = mysql.createConnection(config.db);
connection.connect();

// Our node module, it's in gitignore
// const apiKey = require('../config');
const apiBaseUrl = 'http://api.themoviedb.org/3';
const imageBaseUrl = 'http://image.tmdb.org/t/p/w300';
const nowPlayingUrl = `${apiBaseUrl}/movie/now_playing?api_key=${config.apiKey}`;
// console.log(nowPlayingUrl)

// HOW we would do it in front-end
// wont work now!
// $.getJSON(nowPlayingUrl,(data)=>{})
// $.ajax(nowPlayingUrl,{method:'get'})
const request = require('request');

/* GET home page. */
router.get('/', function(req, res, next) {
  request.get(nowPlayingUrl,(error,response,body)=>{
    // console.log(typeof(body));
    const parsedData = JSON.parse(body);
    // console.log(parsedData);
    // we now have the data from movieApi.
    // lets send it over to the view/EJS!
    res.render('now_playing',{
      parsedData: parsedData.results,
      imageBaseUrl: imageBaseUrl
    });
    // res.json(parsedData)
  });
  // res.render('index', { title: 'Express' });
});

// Make a new route called '/search'
// if the user comes to it, render search.ejs
// search.ejs should be an input box with a form tag
// around it, and a button. That's all
router.get('/search',function(req, res, next) {
  res.render('search', {

  })
})

router.post('/search/movie',(req,res)=>{
  // submitted data from forms comes in the request object 
  // query string data, is in req.query
  // posted data , is in req.body
  const movieTitle = req.body.movieTitle;
  // res.json(req.body);
  const searchUrl = `${apiBaseUrl}/search/movie?query=${movieTitle}&api_key=${apiKey}`;
  request.get(searchUrl,(error, response, body)=>{
    const parsedData = JSON.parse(body);
    res.render('now_playing',{
      imageBaseUrl,
      parsedData: parsedData.results
    });
  })
});

router.get('/login', (req,res)=>{
  res.render('login');
})

router.post('/loginProcess',(req,res)=>{
  const insertQuery = `INSERT into users(email,password)
    VALUES
    (?,?);`
  res.json(req.body);
})

module.exports = router;