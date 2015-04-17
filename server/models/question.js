// This is the Question.js file located at /server/models/question.js
// We want to create a file that has the schema for our questions and creates a model that we can then call upon in our controller
var mongoose = require('mongoose');

// Create QuestionSchema

var QuestionSchema = new mongoose.Schema({
    question: String,
    answer: String,
    wrong1: String,
    wrong2: String
});

// use the schema to create the model
// Note that creating a model CREATES the collection in the database (makes the collection plural)

var Mongoose = mongoose.model('Question', QuestionSchema);
