
// Code goes here
var app = angular.module('myApp',[]);
app.controller('MyController', function($scope) {
  $scope.fname ="Dinesh";
  $scope.lname ="Mongia";
  $scope.flname=''
  $scope.fullname = function(){
      $scope.flname = $scope.fname+ " "+$scope.lname
      return  $scope.flname
  }
 
});


