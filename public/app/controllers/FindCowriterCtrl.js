angular.module('Capstone')
  .controller('FindCowriterController', ['$scope', '$state', 'User', 'Cowriter', 'Tracks',
    function($scope, $state, User, Cowriter, Tracks) {

      $scope.nomore = false;
      $scope.showWidget = false;
      $scope.checkForTracks = false;

      var cowritersArray;
      var maxIndex;


      Cowriter.findCowriters()
        .then(function(cowriters) {
          cowritersArray = cowriters.data;
          maxIndex = cowritersArray.length;
          $scope.cowriter = cowritersArray[0];
          Tracks.getTracks($scope.cowriter._id)
            .then(function(tracks) {
              if (tracks.data.length === 0) {
                $scope.checkForTracks = true;
              }
              console.log('tracks>>>', tracks.data.length)
              $scope.cowriter['tracks'] = tracks.data;
            }).catch(function(error) {
              console.log(error);
            })
        }).catch(function(error) {
          console.log(error);
        });

      var index = 1;

      $scope.next = function() {
        $scope.likeMatch = '';
        $scope.warning = '';
        if (index < maxIndex) {
          $scope.cowriter = cowritersArray[index];
          Tracks.getTracks($scope.cowriter._id)
            .then(function(tracks) {
              $scope.cowriter['tracks'] = tracks.data;
            }).catch(function() {
              console.log(error);
            });
          index++;
        } else {
          $scope.nomore = true;
        }
      };

      $scope.like = function(cowriter_id) {
        Cowriter.likeCowriter(cowriter_id)
          .then(function(response) {
            if(response.data.msg) {
              $scope.likeMatch = response.data;
            } else if (response.data.warning) {
              $scope.warning = response.data.warning;
            } else {
              $scope.next();
            }
          }).catch(function(error) {
            console.log(error);
          });
      };

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
