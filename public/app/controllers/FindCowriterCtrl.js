angular.module('Capstone')
  .controller('FindCowriterController', ['$scope', '$state', 'User', 'FindCowriter', 'Tracks',
    function($scope, $state, User, FindCowriter, Tracks) {

      let cowritersArray;
      $scope.cowriter;

      FindCowriter.getCowriters()
        .then(function(cowriters) {
          cowritersArray = cowriters.data;
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


      $scope.play = function (src) {
        console.log('play function', src);
        $scope.iframeSrc = 'https://w.soundcloud.com/player/?auto_play=true&show_user=false&show_artwork=false&url='+src;
      }




}]);
