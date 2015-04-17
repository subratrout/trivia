/**
 * Created by subratrout on 4/17/15.
 */
// First add the following two lines at the top of the friends controller so that we can access our model through var Friend
// need to require mongoose to be able to run mongoose.model()
var mongoose = require('mongoose');
var User = mongoose.model('User');




// this is our friends.js file located at /server/controllers/friends.js
// note the immediate function and the object that is returned
module.exports = (function() {
    return {
        show: function(req, res) {
            User.find({}, function(err, results) {
                if(err) {
                    console.log(err);
                } else {
                    res.json(results);
                }
            })
        },

        add: function(req, res) {
            var d = new Date();
            current_date = d.getTime();
            console.log(req.body);
            if(!req.body.name){
                console.log("name  cant be blank")
                res.json({error: "Name cannot be blank"})
            }
            else{

                console.log('bllllllllaahhh', req.body.name)

                User.findOne({name: req.body.name}, function(err, result2)
                {
                    console.log('hhiiiiiii', result2);
                    console.log('dsfsdfdsf', err);

                    if(!result2)
                    {
                        var user = User({name: req.body.name, date: d, date_string: current_date});

                        user.save(function(err, results) {
                            if(err) {
                                console.log(err);
                            } else {
                                res.json(results);
                            }
                        })
                    }
                    else{
                        if(result2.name == req.body.name){
                            console.log("Name exists");
                            res.json({error: "Name already exists"})
                        }


                    }
                })
            }

        }
    }
})();
