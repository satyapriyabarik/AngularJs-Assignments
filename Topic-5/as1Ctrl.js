var MyApp= angular.module('myApp',[]);
MyApp.controller('appCtrl',function($scope, $http, $timeout){
    let service_Url='https://jsonplaceholder.typicode.com/posts';
    $scope.stroredData='';
    $http.get(service_Url).then(function (response) {
        $timeout(function () {
             $scope.stroredData = response.data;
        },2000)
    });
   
});
