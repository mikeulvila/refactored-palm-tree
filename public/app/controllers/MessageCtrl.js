// public/app/controllers/MainCtrl.js
angular.module('Capstone')
  .controller('MessageController', ['$scope', '$state', 'User', 'Message',
    function($scope, $state, User, Message) {
      $scope.message = 'Message Page';

}]);
