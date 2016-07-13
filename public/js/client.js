
var app = angular.module('olympiean',[]);

app.controller('athlete',function($scope, $http){


  $scope.boxersGet ={
    method: 'GET',
    url: '/boxing'
  };

  $scope.judoGet ={
    method: 'GET',
    url: '/judo'
  };

  $scope.fencingGet= {
    method: 'GET',
    url: '/fencing'
  };
  $scope.taekwondoGet= {
    method: 'GET',
    url: '/taekwondo'
  }
  $scope.wrestlingGet= {
    method: 'GET',
    url: '/wrestling'
  };



  function successHandle(response) {
  $scope.athlete = response.data;
  console.log('Success:', response);
  }
  function faliureHandle(response) {

  console.log('Failure:', response);
  }

  $scope.getAthlete  = function getAthlete(oly){
    $http(oly).then(successHandle, faliureHandle);
  }


});
