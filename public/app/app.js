'use strict';
// public/app/app.js
angular.module('Capstone', ['ui.router', 'ui.bootstrap', 'ngFileUpload'])
  .config(function($sceDelegateProvider) {
    $sceDelegateProvider.resourceUrlWhitelist([
    'self',
    'https://w.soundcloud.com/**'
    ]);
  });
