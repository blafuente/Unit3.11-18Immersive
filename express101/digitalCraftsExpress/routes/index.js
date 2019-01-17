var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { 
    title: 'Express',
    students: [
      "JR",
      "Jim",
      "Zac",
      "Matt"
    ] 
  });
});

module.exports = router;
