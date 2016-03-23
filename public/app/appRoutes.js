// public/app/appRoutes.js
angular.module('Capstone')
    .config(['$stateProvider', '$urlRouterProvider',
      function($stateProvider, $urlRouterProvider) {

        $stateProvider
          .state('home', {
            url: '/',
            templateUrl: 'templates/home.html',
            controller: 'MainController'
          })
          .state('profile', {
            url: '/profile',
            templateUrl: 'templates/profile.html',
            controller: 'ProfileController'
          })
          .state('profile.soundcloud-player', {
            url: '/soundcloud-player',
            templateUrl: 'templates/profile.soundcloud-player.html',
            controller: 'SoundcloudPlayerController'
          })
          .state('edit-profile', {
            url: '/edit-profile',
            templateUrl: 'templates/edit-profile.html',
            controller: 'EditProfileController'
          })
          .state('find-cowriter', {
            url: '/find-cowriter',
            templateUrl: 'templates/find-cowriter.html',
            controller: 'FindCowriterController'
          });

        // For any unmatched url, redirect to /
        $urlRouterProvider.otherwise('/');


}]);
