// public/app/appRoutes.js
angular.module('appRoutes', [])
    .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {

        $stateProvider
          .state('index', {
            url: '/',
            templateUrl: 'index.html',
            controller: 'MainController'
          })
          .state('signup', {
            url: '/signup',
            templateUrl: 'templates/signup.html',
            controller: 'MainController'
          })
          .state('account', {
            url: '/account',
            templateUrl: 'templates/account.html',
            controller: 'MainController'
          })

}]);
