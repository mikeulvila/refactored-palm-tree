'use strict';
// (function () {
  const app = angular.module('Capstone', ['ui.router']);

  app.config(function ($stateProvider, $urlRouterProvider) {
     $stateProvider
      .state('index', {
        url: '/',
        templateUrl: 'index.html',
        controller: 'mainCtrl'
      })
      .state('signup', {
        url: '/signup',
        templateUrl: 'templates/signup.html',
        controller: 'mainCtrl'
      });
  }); // END CONFIG





// }()); // END IIFE
