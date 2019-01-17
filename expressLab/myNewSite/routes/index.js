var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  // check the variable our app.use set to find out
  // if this person is a valid user 
  res.render('index', { 
    title: 'Students of November Immersive 2018',
    students: [
      "Jr",
      "Jim",
      "Zac",
      "Matt",
      "Brian",
      "Greg",
      "Binga",
      "Ron",
      "Michael",
      "Jason",
      "Katie",
      "Sean",
      "Christopher",
      "Khanh",
      "Brandon",
      "Connor",
      "Cody",
      "Noelle",
      "Rob"
    ] 
  });
});

// var sturev = students.reverse();

// router.get('/reverse',function(req, res, next) {
//   res.render('index',{
//     sturev;
//   })
// })

module.exports = router;
