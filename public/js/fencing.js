
angular.module('olympiean').controller('fencingControl', function ($scope, $http ){
  var fencingGet= {
    method: 'GET',
    url: '/fencing'
  };
  

  $http.get('/fencing').then(function(responce){
    $scope.athlete = responce.data;
  })
});
