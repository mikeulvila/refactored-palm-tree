// public/app/controllers/MainCtrl.js
angular.module('Capstone')
  .controller('MessageController', ['$scope', '$state', 'User', 'Cowriter', 'Message',
    function($scope, $state, User, Cowriter, Message) {

      var user_id = parseInt($state.params.user_id);
      var cowriter_id = parseInt($state.params.cowriter_id);
      var message_id = makeMessageId(user_id, cowriter_id);

      $scope.message_id = message_id;

      Cowriter.getCowriter(cowriter_id)
        .then(function(cowriter) {
          $scope.cowriter = cowriter.data;
        }).catch(function(error) {
          console.log(error);
        });

      User.getUser()
        .then(function(cowriter) {
          $scope.user = cowriter.data;
        }).catch(function(error) {
          console.log(error);
        });

      getMessages();

      $scope.text;

      $scope.sendMessage = function (id) {
        Message.sendMessage(id, { text:$scope.text})
          .then(function(response) {
            console.log('post response', response);
            $scope.text = '';
            getMessages();
          }).catch(function(error) {
            console.log(error);
          });
      };

      function getMessages () {
        Message.getMessage(message_id)
        .then(function(message){
          if (message.data.newMsg) {
            $scope.newMsg = message.data;
          } else {
            $scope.newMsg = '';
            $scope.message = message.data;
            console.log('scope.message', $scope.message)
          }
          console.log('message response>>>', message);
        }).catch(function(error) {
          console.log(error);
        });
      };

      function makeMessageId (id_1, id_2) {
        if (id_1 < id_2) {
          return parseInt(id_1+''+id_2);
        } else {
          return parseInt(id_2+''+id_1);
        }
      };

}]);
