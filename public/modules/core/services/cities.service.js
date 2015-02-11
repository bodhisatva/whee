 'use strict'

 var app = angular.module('app');

 app.service('citiesServices', function($http, $q) {
    var deferred = $q.defer();
    $http.get('/modules/resources/offers.json').then(function(data) {
      deferred.resolve(data);
    });
    this.getData = function() {
      return  deferred.promise;
    }

  });