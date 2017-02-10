/**
 * Created by jonlazarini on 10/02/17.
 */
require('dotenv').config();

// accessing env vars using dotenv
var USER = process.env.USER_DB;
var PW = process.env.USER_PW;

module.exports = {
    databaseUrl: 'mongodb://'+ USER +':'+ PW +'@ds033976.mlab.com:33976/node-mongo'
};