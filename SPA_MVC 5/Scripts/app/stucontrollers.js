var stucontrollers = angular.module("stucontrollers", []);
stucontrollers.controller("GetStudentsList",

    function GetStudentsList($scope, $http) {
    $http.get("/api/students").success(function (data) {
        $scope.students = data;
    })
});

stucontrollers.controller("AddStudent", function ($scope, $http, $location) {
    $scope.student = {
        "FirstName": "",
        "LastName": "",
        "Age": "",
        "Gender": "Male"
    };
    $scope.genders = ['Male', 'Female', 'Other'];
    $scope.pattern = /^\s*\d+\s*$/;
    $scope.Add = function () {
        $http({ method: "POST", data: $scope.student, url: "/api/students" }).
        success(function (data, status, headers, config) {
            $scope.students = data;
            $scope.student = {
                "FirstName": "",
                "LastName": "",
                "Age": "", 
                "Gender": ""
            };
        });
        alert("Student added to DB");
        $location.path('/allstu');
    }
});

stucontrollers.controller("AllStudents", function ($scope, $http) {

    $scope.getAll = function () {
        $http({ method: "GET", url: "/api/students" }).
        success(function (data, status, headers, config) {
            $scope.students = data;
        });
    }
    $scope.getAll();
    $scope.Remove = function (Id) {

        $http({method:"DELETE",url:"/api/students/"+Id})
        .success(function(){
            alert("Deletion success");
            $scope.getAll();
        });
    }
});