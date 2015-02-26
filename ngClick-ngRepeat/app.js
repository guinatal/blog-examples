(function(){
  var myApp = angular.module('myApp', []);

  myApp.controller("myController", function($scope){

    $scope.click = function(){

      $scope.message = "It's working!";
      $scope.users = json; // Storing data inside the controller
      $scope.show = true;

    }

    $scope.showEmail = function(email){

      alert(email);

    }

  });

  var json = [
    {name: "Guilherme", email: "guilherme@test.com", age: "22"},
    {name: "Milena", email: "milena@test.com", age: "26"}
  ];

})();
