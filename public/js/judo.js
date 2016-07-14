
angular.module('olympiean').controller('judoControl', function ($scope , $http){
  var judoGet ={
    method: 'GET',
    url: '/judo'
  };
  $http.get('/judo').then(function(responce){
    $scope.athlete = responce.data;
  })
});
