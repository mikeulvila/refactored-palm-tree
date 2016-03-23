angular.module('Capstone')
  .controller('CowriterController', ['$scope', '$state', 'User', 'Cowriter', 'Tracks',
    function($scope, $state, User, Cowriter, Tracks) {

      let cowritersArray;
      let maxIndex;

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

      let index = 1;

      $scope.next = function() {
        if (index < maxIndex) {
          $scope.cowriter = cowritersArray[index];
          Tracks.getTracks($scope.cowriter._id)
            .then(function(tracks) {
              $scope.cowriter['tracks'] = tracks.data;
            }).catch(function() {
              console.log('getTracks error>>>', error);
            });
          index++;
        } else {
          alert('there are no more genre matching cowriters');
          $state.go('profile');
        }
      };

      $scope.like = function(cowriter_id) {
        Cowriter.likeCowriter(cowriter_id)
          .then(function() {
            $scope.next();
          }).catch(function(error) {
            console.log('like error>>>', error);
          });
      }

      $scope.play = function (src) {
        console.log('play function', src);
        $scope.iframeSrc = 'https://w.soundcloud.com/player/?auto_play=true&show_user=false&show_artwork=false&url='+src;
      };




}]);
