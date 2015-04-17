/**
 * Created by subratrout on 4/17/15.
 */
// First add the following two lines at the top of the Questions controller so that we can access our model through var Question
// need to require mongoose to be able to run mongoose.model()
var mongoose = require('mongoose');
var Question = mongoose.model('Question');

// this is our friends.js file located at /server/controllers/questions.js
// note the immediate function and the object that is returned
module.exports = (function() {
    return {
        show: function(req, res) {
            Question.find({}, function(err, results) {
                if(err) {
                    console.log(err);
                } else {
                    res.json(results);
                }
            })
        },

        add: function(req, res) {
            console.log(req.body);
            if(!req.body.question || !req.body.answer || !req.body.wrong1 || !req.body.wrong2){
                console.log("Question or answer  cant be blank")
                res.json({error: "Question or answer field can't be blank"})
            }
            else{

                console.log('For question', req.body.question);

                Question.findOne({name: req.body.question}, function(err, result2)
                {
                    console.log('For result', result2);
                    console.log('For error', err);

                    if(!result2)
                    {
                        var question = Question({question: req.body.question, answer: req.body.answer, wrong1: req.body.wrong1, wrong2: req.body.wrong2});
                        console.log('else', question)
                        question.save(function(err, results) {
                            if(err) {
                                console.log(err);
                            } else {
                                res.json(results);
                            }
                        })
                    }
                    else{
                        if(result2.question == req.body.question){
                            console.log("Question exists");
                            res.json({error: "Question already exists"})
                        }


                    }
                })
            }

        }
    }
})();
