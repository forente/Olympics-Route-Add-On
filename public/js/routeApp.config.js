angular.module('olympiean').config(function ($routeProvider, $locationProvider){
  $routeProvider
  .when('/boxing', {
    templateUrl: "view/boxing.html",
    controller:'boxingControl'
  })
  .when('/judo', {
    templateUrl: "view/judo.html",
    controller:'judoControl'
  })
  .when('/fencing', {
    templateUrl: "view/fencing.html",
    controller:'fencingControl'
  })
  .when('/taekwondo', {
    templateUrl: "view/taekwondo.html",
    controller:'taekwondoControl'
  })
  .when('/wrestling', {
    templateUrl: "view/wrestling.html",
    controller:'wrestlingControl'
  })

  $locationProvider.html5Mode(true);
});
