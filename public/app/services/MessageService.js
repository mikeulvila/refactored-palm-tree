// public/app/services/MessageService.js
angular.module('Capstone')
    .factory('Message', ['$http', '$state',
        function($http, $state) {

          return {
              // send message
              sendMessage: function () {
                return $http.post('/api/message');
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
