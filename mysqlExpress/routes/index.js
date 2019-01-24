var express = require('express');
var router = express.Router();
// Use the myspl module to connect, and query from express/node
// the myspl module, is NOT part of core so... we need to npm install 
var mysql      = require('mysql');
const config = require('./config');
var connection = mysql.createConnection(config);
connection.connect();

/* GET home page. */
router.get('/', function(req, res, next) {
  // we want to load up a list of our restaurants
  // on the homepage.
  // These are inside of myspl.
  // Inside this route, BEFORE we res.render a view
  // we want to query the db and get the data.
  // then we can send it over to the view 
  const query = 'SELECT * FROM restaurant;'
  connection.query(query,(err,results)=>{
    if (err){
      throw err;
    }else{
      res.json(results);
    }
  })

  router.get('/takeout',(req,res)=>{
    const takeOutQuery = "SELECT *  FROM restaurant WHERE takeout = 'yes';"
    connection.query(takeOutQuery,(err,result)=>{
      res.json(results);
    })
  })

});

module.exports = router;

