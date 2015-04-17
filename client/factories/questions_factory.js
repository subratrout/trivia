//Create Question Factory

trivia_app.factory('QuestionsFactory', function($http){
    var factory = {};
    var questions = [];

    factory.getQuestions = function(callback){

        $http.get('/questions').success(function(output){
            callback(output);
        })
    }

    factory.addQuestion = function(info, callback){
        $http.post('/add_question', info).success(function(output){
                callback(output);
        });
    }

    return factory;
});