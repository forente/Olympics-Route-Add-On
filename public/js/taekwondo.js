
angular.module('olympiean').controller('taekwondoControl', function ($scope, $http ){
  var taekwondoGet= {
    method: 'GET',
    url: '/taekwondo'
  }

  $http.get('/taekwondo').then(function(responce){
    $scope.athlete = responce.data;
  })
});
