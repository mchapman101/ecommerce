angular.module("ecommerceApp", ['ui.router'])

.config(['$stateProvider', "$urlRouterProvider", function(stateProvider, urlRouterProvider) {

urlRouterProvider.otherwise('/home');
stateProvider
  .state('home', {
    url: '/home',
    templateUrl: 'views/home.html'
  })
  .state('admin', {
    url: '/admin.html',
    templateUrl: 'views/admin.html'
  });

}]);
