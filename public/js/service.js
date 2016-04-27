angular.module("ecommerceApp").service('ecommerceService', function($http){

this.getProducts = function (){
  console.log("hit2");
  return $http({

    method: "GET",
    url: "http://localhost:4000/api/products",
  }).then(function (response) {
    console.log(response);
    return response.data;
  });
};



});
