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
    })
}]);
