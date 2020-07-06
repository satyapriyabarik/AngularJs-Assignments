var MyApp= angular.module('myApp',[]);
MyApp.controller('appCtrl',function($scope){
    $scope.customText ="";
   
});
MyApp.filter('CamelCaseFilter',function(){
return function(textval){
    return textval.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
}
})