"use strict";

// const MongoClient = require("mongodb").MongoClient;
const { MongoClient } = require("mongodb");
const MONGODB_URI = "mongodb://localhost:27017/tweeter";

MongoClient.connect(MONGODB_URI, (err, db) => {
    if (err) {
        console.error(`Failed to connect: ${MONGODB_URI}`);
        throw err;
    }

    // ==> We have a connection to the "test-tweets" db,
    //     starting here.
    console.log(`Connected to mongodb: ${MONGODB_URI}`);

    function getTweets(callback) {
        db.collection("tweeter").find().toArray(callback);
        if (err) {
            return callback(err);
        }
        // callback(null, tweeter);
        // console.log("find result: ", result);
        // console.log("type of find result: ", typeof result);
        // console.log("for eachitem yielded by the cursor:");
        // results.each((err, item) => console.log(" ", item));
        // console.log("results array: ", results);

        // results.toArray((err, resultsArray) => {
        // if (err) throw err;

        // console.log("results.toArray:", resultsArray);

    };

    getTweets((err, tweeter) => {
        console.log(tweeter)
        if (err) throw err;

        console.log("Logging each tweet:");
        for (let tweet of tweeter) {
            console.log(tweet);
        }




        // ==> In typical node-callback style, any program
        //     logic that needs to use the connection needs
        //     to be invoked from within here.
        //
        // Another way to say: this is an "entry point" for
        // a database-connected application!

        // ==> At the end, we close the connection:
        db.close();
    });
});
