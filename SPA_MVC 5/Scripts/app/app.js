var module = angular.module("StudentApp", ["ngRoute", "stucontrollers", "sturesources"]);

module.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.
    when('/home', {
        templateUrl: 'templates/home.html',
        controller: 'GetStudentsList'
    }).
        when('/addstu', {
            templateUrl: 'templates/addstudent.html',
            controller: 'AddStudent'
        }).
        when('/allstu', {
            templateUrl: 'templates/allstudents.html',
            controller: 'AllStudents'
         }).
    otherwise({
        redirectTo: '/home'
    });
}]);