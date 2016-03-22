angular.module('Capstone')
  .controller('FindCowriterController', ['$scope', '$state', 'User', 'Track',
    function($scope, $state, User, Track) {

      Track.getMyGenresTracks()
        .then(function(tracks) {
          console.log('tracks.data>>>', tracks.data);
        }).catch(function(error) {
          console.log('error>>>', error);
        });


}]);
