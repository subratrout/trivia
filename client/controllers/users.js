// Users controller
trivia_app.controller('UsersController', function($scope, UsersFactory, QuestionsFactory){


    UsersFactory.getUsers(function(data){
        $scope.users =data;
    });


    $scope.addUser = function(){
        UsersFactory.addUser($scope.new_user, function(data){
            $scope.errors = data;
        });
        $scope.new_user = {};

        UsersFactory.getUsers(function(data){
            $scope.users =data;
        });
    }

})