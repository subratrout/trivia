/**
 * Created by subratrout on 4/17/15.
 */
var trivia_app = angular.module('trivia_app', ['ngRoute']);

// Set up routing
trivia_app.config(function ($routeProvider) {
    $routeProvider
        .when('/',{
            templateUrl: 'partials/dashboard.html'
        })
        .when('/questions',{
            templateUrl: 'partials/questions.html'
        })

        .when('/new_question',{
            templateUrl: 'partials/new_question.html'
        })
        .when('/users',{
            templateUrl: 'partials/users.html'
        })
        .when('/play', {
            templateUrl: 'partials/lets_play.html'
        })
        .otherwise({
            redirectTo: '/'
        });
});