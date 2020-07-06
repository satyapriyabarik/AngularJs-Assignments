var MyApp= angular.module('myApp',['pascalprecht.translate']);
MyApp.config(['$translateProvider', function ($translateProvider) {
$translateProvider.translations('en', {
    'str1':'This website has',
    'str2': 'users'
});

$translateProvider.translations('de', {
    'str1':'Diese Website hat',
    'str2': 'Benutzer'
});

$translateProvider.use("de");

}]);
MyApp.controller('appCtrl',['$scope','$translate',function($scope, $translate){
$scope.num =4;
$scope.string1='str1';
$scope.string2='str2';
$scope.fullstr = 'This website has 4 users'
$scope.clk = function(){
    console.log(document.getElementById('content').innerText)
}
}])
