
angular.module('olympiean').controller('boxingControl', function ($scope, $http){
  var boxersGet ={
    method: 'GET',
    url: '/boxing'
  };

  $http.get('/boxing').then(function(responce){
    $scope.athlete = responce.data;
  })

});
