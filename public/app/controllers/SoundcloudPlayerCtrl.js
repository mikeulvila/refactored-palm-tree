// public/app/controllers/MainCtrl.js
angular.module('Capstone')
  .controller('SoundcloudPlayerController', ['$scope', '$state', 'User',
    function($scope, $state, User) {
      let tracksArray;

      User.getUserTracks()
        .then(function(tracks){
          tracksArray = tracks.data;
          $scope.iframeSrc = getiframeSrc(tracksArray[0].id);
        }).catch(function(error){

        });

      let trackIndex = 1;

      $scope.nextSong = function() {
        $scope.iframeSrc = getiframeSrc(tracksArray[trackIndex].id);
        trackIndex++;
      };

      function getiframeSrc (id) {
        return 'https://w.soundcloud.com/player/?auto_play=true&show_user=false&show_artwork=false&url=http://api.soundcloud.com/tracks/'+id;
      };


      // var widgetIframe = document.getElementById('sc-widget'),
      // widget       = SC.Widget(widgetIframe),
      // newSoundUrl = 'http://api.soundcloud.com/tracks/124048987';

      // setTimeout(function () {

      //   widget.load(newSoundUrl, {
      //     show_artwork: false
      //   });

      // }, 1000);


}]);
