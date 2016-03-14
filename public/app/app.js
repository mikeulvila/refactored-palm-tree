'use strict';
// (function () {
  const app = angular.module('Capstone', ['ui.router']);

  app.config(function ($stateProvider, $urlRouterProvider) {
     $stateProvider
      .state('signup', {
        url: '/signup',
        templateUrl: '/templates/signup.html',
        controller: 'signupCtrl'
      });
  }); // END CONFIG





// }()); // END IIFE
