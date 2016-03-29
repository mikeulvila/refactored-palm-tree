// public/app/controllers/ViewCowriterCtrl.js
angular.module('Capstone')
  .controller('ViewCowriterController', ['$scope', '$state', 'User', 'Tracks', 'Cowriter', 'Message',
    function($scope, $state, User, Tracks, Cowriter, Message) {

      $scope.tracks;
      $scope.notracks = false;
      $scope.showWidget = false;

      Cowriter.getCowriter($state.params.id)
        .then(function(response) {
          $scope.cowriter = response.data;
          Tracks.getTracks(response.data._id)
              .then(function(tracks) {
                if (tracks.data.length > 0) {
                  $scope.tracks = tracks.data;
                } else {
                  $scope.notracks = true;
                };
              }).catch(function(error) {
                console.log(error);
              });
        }).catch(function(error) {
          console.log('getCowriter error>>>', error);
        });

      User.getUser().then(function(user){
        $scope.user = user.data;
      }).catch(function(error){

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

      $scope.sendMessage = function (cowriter_id) {
        Cowriter.sendMsg(cowriter_id)
          .then(function(response) {
            console.log('sendMsg response>>>', response)
          }).catch(function(error) {
            console.log('sendMsg error>>>', error)
          });
      }

      $scope.play = function (src) {
        $scope.showWidget = true;
        $scope.iframeSrc = 'https://w.soundcloud.com/player/?auto_play=true&show_user=false&show_artwork=false&url='+src;
      };

}]);
