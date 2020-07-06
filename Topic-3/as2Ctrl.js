var MyApp= angular.module('myApp',[]);
MyApp.controller('appCtrl',function($scope){
    $scope.companyName;
    $scope.displayname; 
    $scope.submitform = function(){
        $scope.displayname = $scope.companyName
    }
})