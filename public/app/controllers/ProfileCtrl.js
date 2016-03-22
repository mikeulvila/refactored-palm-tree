// public/app/controllers/MainCtrl.js
angular.module('Capstone')
  .controller('ProfileController', ['$scope', '$state', 'User',
    function($scope, $state, User) {
      $scope.tracks;

      User.getUser()
        .then(function(user) {
          $scope.user = user.data;
        }).catch(function (error) {
          $state.go('home');
        });

      User.getUserTracks()
        .then(function(tracks) {
          if (tracks.data.length > 0) {
            $scope.tracks = tracks.data;
          };
        }).catch(function(error) {
          console.log('getUserTracks error>>>', error);
        });
}]);
