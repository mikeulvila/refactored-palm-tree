// public/app/controllers/MainCtrl.js
angular.module('Capstone')
  .controller('ProfileController', ['$scope', '$state', 'User',
    function($scope, $state, User) {

      User.getUser()
        .then(function(user) {
          $scope.user = user.data;
        }).catch(function (error) {
          $state.go('home');
        });

}]);
