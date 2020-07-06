//var MyApp= angular.module('myApp',[]);

MyApp.controller('detailsCtrl',function($scope,$routeParams,$rootScope){
$scope.pid = $routeParams.id.replace(':','');  
$scope.passeddata=$rootScope.sendData;

})