/**
 * Created by jonlazarini on 10/02/17.
 */
var MongoClient = require('mongodb').MongoClient;
var config = require('./config');

var dbUrl = config.databaseUrl;

// function to interact with the DB on our behalf where the db gets injected
var shoveData = function(something, timestamp, db, cb) {
    // creates a collection visits to store our objects
    db.collection('visits')
        .insertOne({
            something: something,
            timestamp: timestamp
            // callback when db is accessed to query it
        }, function(err, result) {
            console.log('result: ', result)
            if (err) return cb(err)
            // visits collection has been mutated
            db.collection('visits')
                .count()
                // returns a promise with the visits from the callback when DB has been queried
                .then(function(visits) {
                    console.log('visits: ', visits)
                    // gives back the result without err (null)
                    cb(null, visits)
                })
        })

};


module.exports = {
    logReq: function(something, timestamp, cb) {
        // connects to mongodb and get access to the database in the callback
        MongoClient.connect(dbUrl, function(err, db) {
            // accesses our db post the data inside
            shoveData(something, timestamp, db, function(err, result) {
                db.close();
                cb(err, result)
            })
        });
    }
};