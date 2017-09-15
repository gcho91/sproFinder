angular.module("sproFinder").controller("learnCtrl", function($scope, coffeeService){
  $scope.coffeeTerms = coffeeService.coffeeTerms;

})
