// public/app/controllers/MainCtrl.js
angular.module('Capstone')
  .controller('ProfileController', ['$scope', '$state', 'User',
    function($scope, $state, User) {

      User.getUser()
        .then(function(user) {
          $scope.user = user.data;
        }).catch(function (error) {
          $state.go('home');
        });

      User.getUserTracks()
        .then(function(tracks) {
          $scope.tracks = tracks.data;
          console.log('$scope.tracks', $scope.tracks);
        }).catch(function(error) {
          console.log('getUserTracks error>>>', error);
        });
}]);
