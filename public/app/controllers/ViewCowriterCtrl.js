// public/app/controllers/ViewCowriterCtrl.js
angular.module('Capstone')
  .controller('ViewCowriterController', ['$scope', '$state', 'User', 'Tracks', 'Cowriter', 'Message',
    function($scope, $state, User, Tracks, Cowriter, Message) {

      Cowriter.getCowriter($state.params.id)
        .then(function(response) {
          $scope.cowriter = response.data;
          console.log('$scope.cowriter>>>', $scope.cowriter);
        }).catch(function(error) {
          console.log('getCowriter error>>>', error);
        });

      $scope.sendMessage = function (cowriter_id) {
        Cowriter.sendMsg(cowriter_id)
          .then(function(response) {
            console.log('sendMsg response>>>', response)
          }).catch(function(error) {
            console.log('sendMsg error>>>', error)
          });
      }

}]);
