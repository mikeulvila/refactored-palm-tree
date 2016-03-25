// public/app/appRoutes.js
angular.module('Capstone')
    .config(['$stateProvider', '$urlRouterProvider',
      function($stateProvider, $urlRouterProvider) {

        $stateProvider
          .state('home', {
            url: '/',
            templateUrl: 'templates/home.html',
            controller: 'HomeController'
          })
          .state('profile', {
            url: '/profile',
            templateUrl: 'templates/profile.html',
            controller: 'ProfileController'
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
          })
          .state('view-cowriter', {
            url: '/view-cowriter/:id',
            templateUrl: 'templates/view-cowriter.html',
            controller: 'ViewCowriterController'
          })
          .state('message', {
            url: '/message/:user_id/:cowriter_id',
            templateUrl: 'templates/message.html',
            controller: 'MessageController'
          })
          .state('profile.soundcloud-player', {
            url: '/soundcloud-player',
            templateUrl: 'templates/profile.soundcloud-player.html',
            controller: 'SoundcloudPlayerController'
          })

        // For any unmatched url, redirect to /
        $urlRouterProvider.otherwise('/');


}]);
