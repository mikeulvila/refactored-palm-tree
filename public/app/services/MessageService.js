// public/app/services/MessageService.js
angular.module('Capstone')
    .factory('Message', ['$http', '$state',
        function($http, $state) {

          return {
              // send message
              getMessage: function (message_id) {
                return $http.get('/api/message/' + message_id);
              },
              // post message
              sendMessage: function (message_id, text) {
                return $http.post('/api/message/' + message_id, text)
              }

          }

}]);
