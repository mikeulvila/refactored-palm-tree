// public/app/services/MessageService.js
angular.module('Capstone')
    .factory('Message', ['$http', '$state',
        function($http, $state) {

          return {
              // send message
              getMessage: function (user_id, cowriter_id) {
                var message_id = '';
                if (user_id < cowriter_id) {
                  message_id = user_id+''+cowriter_id;
                } else {
                  message_id = cowriter_id+''+user_id;
                }

                return $http.get('/api/message/' + message_id);

              },

              sendMessage: function (user_id, cowriter_id) {
                return $http.post('/api/message')
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
