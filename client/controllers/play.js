// Users controller
trivia_app.controller('PlayController', function($scope, PlayFactory, QuestionsFactory){


    QuestionsFactory.getQuestions(function(data){
        $scope.questions =data;
    });


})