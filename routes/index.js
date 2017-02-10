var express = require('express');
var router = express.Router();

/* GET home page. */
/*router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});*/
var database = require('../database');

router.get('/', function(req, res, next) {

  var something = 'some data'
  var timestamp = new Date().toISOString()

  // pass in data to be given in the callback
  database.logReq(something, timestamp, function(err, result) {
    // returns the template with the data from our database
    res.send('<h1>'+something+'<h1><br><h2>'+timestamp+'<h2>')
  })

});

module.exports = router;
