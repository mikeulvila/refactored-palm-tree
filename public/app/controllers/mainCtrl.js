// public/app/controllers/MainCtrl.js
angular.module('MainCtrl', []).controller('MainController', function($scope, $state, User) {

    User.getUserObj().then((user) => {
      $scope.user = user.data;
    });

});
