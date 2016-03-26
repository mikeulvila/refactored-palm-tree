angular.module('Capstone')
  .controller('FindCowriterController', ['$scope', '$state', 'User', 'Cowriter', 'Tracks',
    function($scope, $state, User, Cowriter, Tracks) {

      $scope.nomore;

      var cowritersArray;
      var maxIndex;


      Cowriter.findCowriters()
        .then(function(cowriters) {
          cowritersArray = cowriters.data;
          maxIndex = cowritersArray.length;
          $scope.cowriter = cowritersArray[0];
          Tracks.getTracks($scope.cowriter._id)
            .then(function(tracks) {
              $scope.cowriter['tracks'] = tracks.data;
              console.log('$scope.cowriter>>>', $scope.cowriter);
            }).catch(function(error) {
              console.log('getTracks error>>>', error);
            })
        }).catch(function(error) {
          console.log('error>>>', error);
        });

      var index = 1;

      $scope.next = function() {
        $scope.matchMsg;
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
          $scope.$apply();
        }
      };

      $scope.like = function(cowriter_id) {
        Cowriter.likeCowriter(cowriter_id)
          .then(function(response) {
            if(response.data.msg) {
              $scope.matchMsg = response.data.msg;
              setTimeout(function() {
                $scope.next();
              }, 1000);
            } else if (response.data.warning) {
              $scope.warning = response.data.warning;
              setTimeout(function() {
                $scope.next();
              }, 1000);
            } else {
              $scope.next();
            }
          }).catch(function(error) {
            console.log('like error>>>', error);
          });
      }

      $scope.play = function (src) {
        console.log('play function', src);
        $scope.iframeSrc = 'https://w.soundcloud.com/player/?auto_play=true&show_user=false&show_artwork=false&url='+src;
      };




}]);
