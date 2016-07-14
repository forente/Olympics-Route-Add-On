
angular.module('olympiean').controller('wrestlingControl', function ($scope , $http){
  var wrestlingGet= {
    method: 'GET',
    url: '/wrestling'
  }
  

  $http.get('/wrestling').then(function(responce){
    $scope.athlete = responce.data;
  })
});
