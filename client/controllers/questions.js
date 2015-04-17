// Users controller
trivia_app.controller('QuestionsController', function($scope, QuestionsFactory, UsersFactory){


    QuestionsFactory.getQuestions(function(data){
        $scope.questions =data;
    });

    UsersFactory.getUsers(function(data){
        $scope.users =data;
    });


    $scope.addQuestion = function(){
        QuestionsFactory.addQuestion($scope.new_question, function(data){
            $scope.errors = data;
        });
        $scope.new_question = {};

        QuestionsFactory.getQuestions(function(data){
            $scope.questions =data;
        });
    }

})