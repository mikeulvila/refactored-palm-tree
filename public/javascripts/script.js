(function(){
  var widgetIframe = document.getElementById('sc-widget'),
      widget       = SC.Widget(widgetIframe),
      newSoundUrl = 'http://api.soundcloud.com/tracks/124048987';

      setTimeout(function () {

        widget.load(newSoundUrl, {
          show_artwork: false
        });

      }, 1000);


  // widget.bind(SC.Widget.Events.READY, function() {
  //   widget.bind(SC.Widget.Events.PLAY, function() {
  //     // get information about currently playing sound
  //     widget.getCurrentSound(function(currentSound) {
  //       console.log('sound ' + currentSound + 'began to play');
  //     });
  //   });
  //   // get current level of volume
  //   widget.getVolume(function(volume) {
  //     console.log('current volume value is ' + volume);
  //   });
  //   // set new volume level
  //   widget.setVolume(50);
  //   // get the value of the current position
  // });

}());
