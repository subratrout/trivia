/**
 * Created by subratrout on 4/17/15.
 */
var questions = require('./../server/controllers/questions.js');
var users = require('./../server/controllers/users.js');
var bodyParser = require("body-parser");



module.exports = function(app){

    app.use(bodyParser.json());

    app.get('/questions', function(req, res){
        questions.show(req,res);

    });

    app.post('/add_question', function(req, res){
        questions.add(req,res);

    });

    app.get('/users', function(req, res){
        users.show(req,res);

    });


    app.post('/add_user', function(req, res){

        users.add(req,res);
    });

}