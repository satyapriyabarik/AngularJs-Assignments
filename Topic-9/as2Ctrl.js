var MyApp= angular.module('myApp',['pascalprecht.translate']);
MyApp.config(['$translateProvider', function ($translateProvider) {
$translateProvider.translations('en', {
    'str1':'I have',
    'str2': 'note'
});

$translateProvider.translations('fr', {
    'str1':'j\'ai',
    'str2': 'Remarque'
});

$translateProvider.use("fr");

}]);
MyApp.controller('appCtrl',['$scope','$translate',function($scope, $translate){
$scope.price =200;
$scope.fullstr = 'I have $200 note';
$scope.string1='str1';
$scope.string2='str2';
$scope.clk = function(){
    console.log(document.getElementById('content').innerText)
}
}])
