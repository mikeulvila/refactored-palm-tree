// public/app/controllers/MainCtrl.js
angular.module('Capstone')
  .controller('MessageController', ['$scope', '$state', 'User', 'Message',
    function($scope, $state, User, Message) {
      console.log('state.params>>>', $state.params);
      var user_id = parseInt($state.params.user_id);
      var cowriter_id = parseInt($state.params.cowriter_id);
      $scope.message;
      Message.getMessage(user_id, cowriter_id)
        .then(function(message){
          console.log('message response>>>', message);
        })

}]);
