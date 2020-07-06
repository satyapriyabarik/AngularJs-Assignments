var MyApp = angular.module('myApp', []);
MyApp.service('MathService', function () {
    this.newFunction = function (x) {
        return Math.sqrt(x)
    }
})
MyApp.controller('appCtrl', function ($scope, MathService) {
$scope.inputNo='';
$scope.sqrtresult='';
$scope.getsqrt = function(){
    $scope.sqrtresult = MathService.newFunction($scope.inputNo);
}

});


