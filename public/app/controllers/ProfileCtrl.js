// public/app/controllers/MainCtrl.js
angular.module('Capstone')
  .controller('ProfileController', ['$scope', '$state', 'User',
    function($scope, $state, User) {

      User.getUserObj()
        .then(function(user) {
          $scope.user = user.data;
        }, function (error) {
          console.log(error);
        });

}]);
