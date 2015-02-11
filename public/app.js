'use strict'

var app = angular.module('app', [
  'ui.router'
]);

//For configuring providers
app.config(['$urlRouterProvider', '$stateProvider', function($urlRouterProvider, $stateProvider) {
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'modules/core/views/home.html',
      controller: 'HomeCtrl'
    })

  /* app.service('citiesServices', function($http, $q) {
     var deferred = $q.defer();
     $http.get('/resources/offers.json').then(function(data) {
       deferred.resolve(data);
     });
     this.getData = function() {
       return .deferred.promise;
     }

   });*/

}]);
