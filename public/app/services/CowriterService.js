// public/app/services/UserService.js
angular.module('Capstone')
    .factory('Cowriter', ['$http', '$state',
        function($http, $state) {

          return {
              // get user tracks
              findCowriters: function() {
                return $http.get('/api/cowriters/find');
              },

              likeCowriter: function(cowriter_id) {
                return $http.post('/api/cowriters/like/' + cowriter_id);
              },

              getCowriter: function(cowriter_id) {
                return $http.get('/api/user/' + cowriter_id);
              },

              removeCowriter: function(cowriter_id) {
                return $http.delete('/api/cowriters/remove/' + cowriter_id);
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
