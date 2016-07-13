
var app = angular.module('olympiean',['ngRoute']);

app.config(function ($routeProvider, $locationProvider){
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


  function successHandle(response) {

  console.log('Success:', response.data);
  }
  function faliureHandle(response) {

  console.log('Failure:', response.data.name);
  }

  var getAthlete  = function getAthlete(oly , h){
    h(oly).then(successHandle, faliureHandle);
    console.log(h(oly));
  }

  app.controller('boxingControl', function ($scope, $http){
    var boxersGet ={
      method: 'GET',
      url: '/boxing'
    };

    getAthlete(boxersGet ,$http);
  
    $http.get('/boxing').then(function(responce){
      $scope.athlete = responce.data;
    })

  });

  app.controller('judoControl', function ($scope , $http){
    var judoGet ={
      method: 'GET',
      url: '/judo'
    };
    getAthlete(judoGet ,$http);
    $http.get('/judo').then(function(responce){
      $scope.athlete = responce.data;
    })
  });

  app.controller('fencingControl', function ($scope, $http ){
    var fencingGet= {
      method: 'GET',
      url: '/fencing'
    };
    getAthlete(fencingGet ,$http);

    $http.get('/fencing').then(function(responce){
      $scope.athlete = responce.data;
    })
  });

  app.controller('taekwondoControl', function ($scope, $http ){
    var taekwondoGet= {
      method: 'GET',
      url: '/taekwondo'
    }
    getAthlete(taekwondoGet ,$http);

    $http.get('/taekwondo').then(function(responce){
      $scope.athlete = responce.data;
    })
  });

  app.controller('wrestlingControl', function ($scope , $http){
    var wrestlingGet= {
      method: 'GET',
      url: '/wrestling'
    }
    getAthlete(wrestlingGet ,$http);

    $http.get('/wrestling').then(function(responce){
      $scope.athlete = responce.data;
    })
  });
