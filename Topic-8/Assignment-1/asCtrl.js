var MyApp= angular.module('myApp',["ngRoute"]);

MyApp.controller('appCtrl',function($scope,$rootScope){
//$scope.id=$routeParams.id;
//$scope.desr = $route.current.desc;  
$scope.cdParlourDetails=[]
$scope.cdParlourDetails =[
       {
           "name":"Aspirant's CD hub",
           "address":[
               {
                "shopno":"104/67",
                "street":"Dalla Street",
                "city":"Bangalore",
                "state":"Karnataka",
                "pin":561167 ,
                "country":"India"
               }
           ],
           "cdDetails":[

               {"id":1,"title":"Sarileru Neekevaru","language":"Telugu","price":123.50,"desc":"This movie cd is orginally in Telugu language","rating":1},
               {"id":2,"title":"Rangila Bohu","language":"Odia","price":85.90,"desc":"This movie cd is orginally in Odia language","rating":5},
               {"id":3,"title":"Ek Mutho Roddur","language":"Bengali","price":115.50,"desc":"This movie cd is orginally in Bengali language","rating":4},
               {"id":4,"title":"Housefull 4","language":"Hindi","price":334.60,"desc":"This movie cd is orginally in Hindi language","rating":5},
               {"id":5,"title":"Dhurala","language":"Marathi","price":608.25,"desc":"This movie cd is orginally in Marathi language","rating":5},
               {"id":6,"title":"Gudumana Avathara","language":"Kannada","price":298.50,"desc":"This movie cd is orginally in Kannada language","rating":2},
               {"id":7,"title":"Kannum Kannum Kollaiyadithaal","language":"Tamil","price":198.50,"desc":"This movie cd is orginally in Tamil language","rating":5},
               {"id":8,"title":"Premi Zukya Nathi ne Zukshe Nahi","language":"Gujarati","price":598.50,"desc":"This movie cd is orginally in Gujarati language","rating":5},
           ]
       }
   ]
   $rootScope.sendData = $scope.cdParlourDetails;
})

//Routing
MyApp.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "home.html"
    })
    .when("/cdlists", {
        templateUrl : "cd-lists.html"
    })
    .when("/home", {
        templateUrl : "home.html"
    })
     .when("/newcd", {
        templateUrl : "new-cd.html"
    })
     .when("/details:id", {
        templateUrl : "cd-details.html",
        controller:'detailsCtrl'
    })
    
});
MyApp.filter('recent',function(){
    return function(val){
        if(val>100){
            return val
        }

    }
})