// public/app/services/UserService.js
angular.module('Capstone')
    .factory('FindCowriter', ['$http', '$state',
        function($http, $state) {

          return {
              // get user tracks
              getCowriters: function() {
                return $http.get('/api/cowriters');
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
