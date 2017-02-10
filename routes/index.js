var express = require('express');
var router = express.Router();

var database = require('../database');

/* GET home page. */
router.get('/', function(req, res, next) {
  var something = 'some data'; // can use GET from req.params
  var timestamp = new Date().toISOString();

  // pass in data to be given in the callback
  database.logReq(something, timestamp, function(err, result) {
    /**
     * sends the template with the data from our database after db manipulation is done,
     * result is finally returned from the cb.
     */
    res.render('index', { data: 'Express',  something: something, timestamp: timestamp, result: result });
  })
});


module.exports = router;
