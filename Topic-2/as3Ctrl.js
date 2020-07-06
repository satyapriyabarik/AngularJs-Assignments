var MyApp= angular.module('myApp',[]);
MyApp.controller('appCtrl',function($scope){
    $scope.xLength=1;
    $scope.mArray=[];
    
   $scope.generatex= function(){
   var nextrow =[];
   nextrow.leftop=5,
   nextrow.rightop=$scope.xLength;
   $scope.xLength+=1;
    if($scope.xLength<=11){
        $scope.mArray.push(nextrow)
    }
     else{
         return false;
     }
       
   }
})