//Create Question Factory

trivia_app.factory('PlayFactory', function($http){
    var factory = {};
    var plays = [];

    factory.Plays = function(callback){

        $http.get('/plays').success(function(output){
            callback(output);
        })
    }

    factory.addPlay = function(info, callback){
        $http.post('/add_play', info).success(function(output){
            callback(output);
        });
    }

    return factory;
});