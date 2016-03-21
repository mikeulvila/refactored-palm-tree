// public/app/services/UserService.js
angular.module('Capstone')
    .factory('User', ['$http', '$state',
        function($http, $state) {

          return {
              // get user json object
              getUser: function() {
                return $http.get('/api/user');
              },
              // update profile
              updateUser: function(id, user) {
                return $http.put('/api/user/'+id, user);
              },
              // get user tracks
              getUserTracks: function() {
                return $http.get('/api/user/tracks');
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
