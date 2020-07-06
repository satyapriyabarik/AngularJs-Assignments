var MyApp= angular.module('myApp',[]);
MyApp.controller('appCtrl',function($scope, $http, $timeout){
    let service_Url='./emp.json';
    $scope.stroredData='';
    $http.get(service_Url).then(function (response) {
        $timeout(function () {
             $scope.stroredData = response.data.employeeDetails;
        },2000)
    });
   
});
