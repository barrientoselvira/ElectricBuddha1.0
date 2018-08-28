// Dependencies
const mongoose = require('mongoose');

module.exports = function() {
    var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/electricBuddha";

    // Configure mongoose to use Promises
    mongoose.Promise = global.Promise;
    // Connect to Mongo DB
    return mongoose.connect(MONGODB_URI);
}