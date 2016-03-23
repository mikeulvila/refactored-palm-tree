// public/app/services/TracksService.js
angular.module('Capstone')
    .factory('Tracks', ['$http', '$state',
        function($http, $state) {

          return {
              // get user tracks
              getTracks: function(user_id) {
                return $http.get('/api/tracks/'+user_id);
              }


              // these will work when more API routes are defined on the Node side of things
              // call to POST and create a new nerd
              // create : function(nerdData) {
              //     return $http.post('/api/nerds', nerdData);
              // },

              // call to DELETE a nerd
              // delete : function(id) {
              //     return $http.delete('/api/nerds/' + id);
              // }
          }

}]);
