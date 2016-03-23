// public/app/controllers/MainCtrl.js
angular.module('Capstone')
  .controller('ProfileController', ['$scope', '$state', 'User',
    function($scope, $state, User) {
      // $scope variables
      $scope.user;
      $scope.tracks;

      User.getUser()
        .then(function(user) {
          $scope.user = user.data;
          User.getUserTracks(user.data._id)
            .then(function(tracks) {
              if (tracks.data.length > 0) {
                $scope.tracks = tracks.data;
              };
            }).catch(function(error) {
              console.log('getUserTracks error>>>', error);
            });
        }).catch(function (error) {
          $state.go('home');
        });

      $scope.play = function (src) {
        $scope.iframeSrc = 'https://w.soundcloud.com/player/?auto_play=true&show_user=false&show_artwork=false&url='+src;
      }

}]);
