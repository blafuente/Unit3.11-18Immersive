var express = require('express');
var router = express.Router();

var mysql      = require('mysql');

const config = require('./config'); //config.js is in the routes folder
console.log(config);
var connection = mysql.createConnection(config);

connection.connect();

console.log('I connected!!!')

/* GET home page. */
router.get('/', function(req, res, next) {

  const selectQuery = 'SELECT * FROM tasks';
  connection.query(selectQuery,(error,results)=>{
    res.render('index',{ taskArray:results });
  })
});

router.post('/addItem',(req,res,next)=>{
  const newTask = req.body.newTask;
  const newTaskDate = req.body.newTaskDate;
  // we know what the user submitted in the form. it comes to this route
  // inside req.body.NAMEOFFIELD. We store those values in a var,
  // Now we take those vars, and insert them into MySQL.
  
  
  // This is bad
  // const badInsertQuery = `INSERT INTO tasks (taskName, taskDate)
  //   VALUES
  //   (${newTask},${newTaskDate});`;

  // SQL injection
  // is when a user inserts a SQL statement into a form
  // to run SQL when the dev didn't intend.
  const insertQuery = `INSERT INTO tasks (taskName, taskDate)
  VALUES
  (?,?);`;
    
  console.log(insertQuery); 
  
  connection.query(insertQuery,[newTask,newTaskDate], (error, results)=>{
    if(error){
      // Something bad happened, STOP
      throw error;
    }else{
      // Query succeeded, Forward user  to homepage
      res.redirect('/');
      
    }
  })
  
  // res.json(req.body)

})

module.exports = router;
