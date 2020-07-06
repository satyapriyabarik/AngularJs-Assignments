var MyApp= angular.module('myApp',[]);

MyApp.controller('appCtrl',function($scope){
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
               {"title":"Sarileru Neekevaru","language":"Telugu","price":123.50},
               {"title":"Rangila Bohu","language":"Odia","price":85.90},
               {"title":"Ek Mutho Roddur","language":"Bengali","price":115.50},
               {"title":"Housefull 4","language":"Hindi","price":334.60},
               {"title":"Dhurala","language":"Marathi","price":608.25},
               {"title":"Gudumana Avathara","language":"Kannada","price":298.50},
               {"title":"Kannum Kannum Kollaiyadithaal","language":"Tamil","price":198.50},
               {"title":"Premi Zukya Nathi ne Zukshe Nahi","language":"Gujarati","price":598.50},
           ]
       }
   ]
})