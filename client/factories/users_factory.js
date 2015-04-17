//Create Users Factory
trivia_app.factory('UsersFactory', function($http){
    var factory = {};
    var users = [];

    factory.getUsers = function(callback){

        $http.get('/users').success(function(output){

            callback(output);
        })
    }
    factory.addUser = function(info, callback){
        $http.post('/add_user', info).success(function(output){
            // console.log('in the factory', output);
            callback(output);
        });
    };

    return factory;
});