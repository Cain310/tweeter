"use strict";

// Simulates the kind of delay we see with network or filesystem operations
const simulateDelay = require("./util/simulate-delay");

// Defines helper functions for saving and getting tweets, using the database `db`
module.exports = function makeDataHelpers(db) {
  return {

    // Saves a tweet to `db`
    saveTweet: function (tweet, callback) {
      db.collection("tweeter").insertOne(tweet, callback)
      // db.tweets.push(newTweet);
      // callback(tweet, null);

    },


    // Get all tweets in `db`, sorted by newest first
    getTweets: function (callback) {
      db.collection("tweeter").find().toArray(function (err, tweets) {
        callback(null, tweets)
      })
      // callback(null, db.tweets.sort(sortNewestFirst));
    }
  }

};



