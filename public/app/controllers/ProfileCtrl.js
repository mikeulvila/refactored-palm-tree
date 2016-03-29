// public/app/controllers/MainCtrl.js
angular.module('Capstone')
  .controller('ProfileController', ['$scope', '$state', 'User', 'Tracks',
    function($scope, $state, User, Tracks) {
      // $scope variables
      $scope.user;
      $scope.tracks;
      $scope.matches;
      $scope.notracks;
      $scope.showWidget = false;

      User.getUser()
        .then(function(user) {
          $scope.user = user.data;
          if (user.data.genres && user.data.strengths) {
            Tracks.getTracks(user.data._id)
              .then(function(tracks) {
                if (tracks.data.length > 0) {
                  $scope.tracks = tracks.data;
                } else {
                  $scope.notracks = true;
                };
              }).catch(function(error) {
                console.log('getTracks error>>>', error);
              });
          } else {
            $state.go('edit-profile');
          }
          if (user.data.matches.length) {
            $scope.matches = user.data.matches;
          }
        }).catch(function (error) {
          $state.go('home');
        });

      // display only true genres
      $scope.filterGenres = function(genres) {
          var result = [];
          angular.forEach(genres, function(value, key) {
              if (value) {
                  result.push(key);
              }
          });
          return result;
      };

      $scope.play = function (src) {
        $scope.showWidget = true;
        $scope.iframeSrc = 'https://w.soundcloud.com/player/?auto_play=true&show_user=false&show_artwork=false&url='+src;
      };

}]);
