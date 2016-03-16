// public/app/appRoutes.js
angular.module('appRoutes', [])
    .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {

        $stateProvider
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
          .state('edit-profile', {
            url: '/edit-profile',
            templateUrl: 'templates/edit-profile.html',
            controller: 'EditProfileController'
          })

}]);
