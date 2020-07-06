var MyApp= angular.module('myApp',[]);
MyApp.controller('appCtrl',function($scope){
    $scope.customText ="";
    $scope.definedArray=["aia","ello","aba","abc","bba"]
   
});
MyApp.filter('ArrayFilter',function(){
    return function (items, letter) {
        var filtered = [];
        for (var i = 0; i < items.length; i++) {
            var item = items[i];
            if (
               item.charAt(0).toLowerCase() == letter.toLowerCase() && item.charAt(item.length-1).toLowerCase() == letter.toLowerCase()){
                filtered.push(item);
            }
        }
        return filtered;
    };
})