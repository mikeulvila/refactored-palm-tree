'use strict';
// public/app/app.js
angular.module('Capstone', ['ui.router', 'ngFileUpload'])
  .config(function($sceDelegateProvider) {
    $sceDelegateProvider.resourceUrlWhitelist([
    'self',
    'https://w.soundcloud.com/**'
    ]);
  });
