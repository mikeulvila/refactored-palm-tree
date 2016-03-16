  (function(){
    var widgetIframe = document.getElementById('sc-widget'),
        widget       = SC.Widget(widgetIframe),
        newSoundUrl = 'http://api.soundcloud.com/tracks/124049079';

    widget.bind(SC.Widget.Events.READY, function() {
      widget.load(newSoundUrl, {auto_play: true}, function() {

          widget.bind(SC.Widget.Events.PLAY, function() {
            // get information about currently playing sound
            widget.getCurrentSound(function(currentSound) {
              console.log(currentSound);
            });
          });
          // get current level of volume
          widget.getVolume(function(volume) {
            console.log('current volume value is ' + volume);
          });


        });
      // set new volume level
      widget.setVolume(50);
      // get the value of the current position
    });

  }());
