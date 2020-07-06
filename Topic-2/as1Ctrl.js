var MyApp= angular.module('myApp',[]);
MyApp.controller('appCtrl',function($scope){
    $scope.current= new Date();
    $scope.lastmodified=new Date()
    $scope.lastmodifieddate= function(){
    $scope.lastmodified = new Date(document.lastModified);
    } 
})