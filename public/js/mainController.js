angular.module("ecommerceApp").controller("mainController", function($scope, ecommerceService){
$scope.test = "testing";

$scope.products;

$scope.getProducts = function() {
  console.log("hit1");
  ecommerceService.getProducts().then(function(response){
    $scope.products = response;
  });
};
$scope.getProducts();

});
