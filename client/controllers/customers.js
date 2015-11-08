var myApp = angular.module("myApp");

myApp.controller('CustomersController', ['$scope', '$http', '$location', '$routeParams', function($scope, $http, $location, $routeParams) {
  console.log("Customer's Controller Initialized....");

  $scope.getCustomers = function() {
    $http.get('/api/customers').success(function(response) {
      $scope.customers = response;
    });
  }

  $scope.getCustomer = function() {
    var id = $routeParams.id;
    $http.get('/api/customers/ + id').success(function(response) {
      $scope.customer = response;
    });
  }
}]);
