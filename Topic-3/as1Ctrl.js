var MyApp= angular.module('myApp',[]);
MyApp.controller('appCtrl',function($scope,$rootScope){
    $scope.companyName ="Wipro Technologies";
    $scope.location= "Bangalore";
    $rootScope.companyName ="Infosys Technologies";
    $rootScope.location= "Pune";
    $rootScope.submitform= function(){
        
    }
})