'use strict'

angular.module('app').controller('HomeCtrl', ['$scope', 'citiesServices',
  function($scope, citiesServices) {

    var promise = citiesServices.getData();
    promise.then(function(data) {
      $scope.cityInformation = data.data.offers; //json object per city
      console.log($scope.cityInformation);
    })
  }
]);
