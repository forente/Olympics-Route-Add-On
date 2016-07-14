angular.module('olympiean').factory('DataService', function($http){

  var data = {};

  function successHandle(response) {

  console.log('Success:', response.data);
  }
  function faliureHandle(response) {

  console.log('Failure:', response.data.name);
  }


  return {
    data: data,
  }
})
