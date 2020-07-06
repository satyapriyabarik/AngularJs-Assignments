var MyApp= angular.module('MyApp',[]);
MyApp.controller('appCtrl',function($scope){
    $scope.grossamount=4500;
    $scope.discountpercent=5;
    $scope.discountcode;
   // $scope.discountCal=($scope.grossamount*$scope.discountpercent/100);
    
})
