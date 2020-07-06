var MyApp= angular.module('myApp',["ngRoute"]);

MyApp.controller('appCtrl',function($scope,$rootScope){
$scope.bookParlourDetails=[]
$scope.bookParlourDetails =[
       {
           "name":"Malhotra Book Depot",
           "address":[
               {
                "shopno":"114/67",
                "street":"Baro Bazar",
                "city":"Kolkata",
                "state":"West Bengal",
                "pin":245678 ,
                "country":"India"
               }
           ],
           "bookDetails":[

               {"id":1,"title":"Maha Prasthanam","author":"Sri Sri","language":"Telugu","price":123.50,"desc":"This book is orginally in Telugu language","rating":1},
               {"id":2,"title":"Geeta Gobind","author":"Jayadeba","language":"Odia","price":85.90,"desc":"This book is orginally in Odia language","rating":5},
               {"id":3,"title":"Khana Mihirer Dhipi","author":"Bani Basu","language":"Bengali","price":115.50,"desc":"This book is orginally in Bengali language","rating":4},
               {"id":4,"title":"Godaan","author":"Munshi Premchand","language":"Hindi","price":334.60,"desc":"This book is orginally in Hindi language","rating":5},
               {"id":5,"title":"Zoombi","author":"Anand Yadav","language":"Marathi","price":608.25,"desc":"This book is orginally in Marathi language","rating":5},
               {"id":6,"title":"Chidambara Rahasya","author":"Poornachandra","language":"Kannada","price":298.50,"desc":"This book is orginally in Kannada language","rating":2},
               {"id":7,"title":"Ramavataram","author":" Kambar","language":"Tamil","price":198.50,"desc":"This book is orginally in Tamil language","rating":5},
               {"id":8,"title":"Saraswatichandra","author":"Govardhanram","language":"Gujarati","price":598.50,"desc":"This book is orginally in Gujarati language","rating":5},
           ]
       }
   ]
   $rootScope.sendData = $scope.bookParlourDetails;
})

//Routing
MyApp.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "home.html"
    })
    .when("/booklists", {
        templateUrl : "book-lists.html"
    })
    .when("/home", {
        templateUrl : "home.html"
    })
     .when("/newbook", {
        templateUrl : "new-book.html"
    })
     .when("/details:id", {
        templateUrl : "book-details.html",
        controller:'detailsCtrl'
    })
    
});
