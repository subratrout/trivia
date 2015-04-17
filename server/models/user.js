// This is the friend.js file located at /server/models/friend.js
// We want to create a file that has the schema for our friends and creates a model that we can then call upon in our controller
var mongoose = require('mongoose');

// Create friendSchema

var UserSchema = new mongoose.Schema({
    name: String
});

// use the schema to create the model
// Note that creating a model CREATES the collection in the database (makes the collection plural)

var Mongoose = mongoose.model('User', UserSchema);

//var mongoose = new Mongoose({name: req.body.name, age: req.body.age});