
// Code goes here
var app = angular.module('myApp',[]);
app.service('myService', function ($http) {
 var employees =[{
     "id": 1,
     "name":"Abhishek",
      },
      {
        "id": 2,
        "name":"Mark",
         },
         {
            "id": 3,
            "name":"Rohan",
             }
    ]
    this.getData = function () {
        var resp = $http.get('https://api.randomuser.me');
        return resp; 
    };
 
});
app.controller('myController',function($scope,$http,myService){
$scope.lockdown= myService.getData();
//$scope.lockdown = JSON.stringify($scope.lockdown.$$state.value.data.results);
console.log($scope.lockdown)  
})
