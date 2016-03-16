// public/app/controllers/EditProfileCtrl.js
angular.module('EditProfileCtrl', []).controller('EditProfileController', function($scope, $state, User) {
    $scope.user;

    User.getUserObj().then((user) => {
      $scope.user = user.data;
    });



});
