"use strict";


const simulateDelay = require("./util/simulate-delay");


module.exports = function makeDataHelpers(db) {
  return {


    saveTweet: function (tweet, callback) {
      db.collection("tweeter").insertOne(tweet, callback)


    },
    getTweets: function (callback) {
      db.collection("tweeter").find().toArray(function (err, tweets) {
        callback(null, tweets)
      })

    }
  }

};



