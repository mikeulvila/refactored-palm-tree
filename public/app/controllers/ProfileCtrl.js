// public/app/controllers/MainCtrl.js
angular.module('Capstone')
  .controller('ProfileController', ['$scope', '$state', 'User', 'Tracks', 'Cowriter',
    function($scope, $state, User, Tracks, Cowriter) {
      // $scope variables
      $scope.user;
      $scope.tracks;
      $scope.matches;
      $scope.notracks;
      $scope.showWidget = false;

      User.getUser()
        .then(function setUserToScope (user) {
          $scope.user = user.data;
          return user;
        })
        .then(function setTracksToScope(user) {
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
          return user;
        })
        .then(function setUserNames (user) {
          $scope.user.matches = user.data.matches.reduce(function (matches, matchId) {
            matches[matchId] = null
            return matches
          }, {});

          $scope.matches = {};

          Object.keys(user.data.matches).forEach(function (matchId) {
            User.getUsername(matchId)
            .then(function(response) {
              $scope.matches[matchId] = response.data;
            })
            .catch(function(error) {
              console.log(error);
            });
          })
        })
        .catch(function (error) {
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

      $scope.removeCowriter = function(cowriter_id) {
        console.log('clicked removeCowriter');
        Cowriter.removeCowriter(cowriter_id)
          .then(function(response) {
            console.log('removeCowriter>>>', response);
          }).catch(function(error) {
            console.log(error);
          });
      };

      $scope.play = function (src) {
        $scope.showWidget = true;
        $scope.iframeSrc = 'https://w.soundcloud.com/player/?auto_play=true&show_user=false&show_artwork=false&url='+src;
      };



}]);
