// public/app/controllers/HomeCtrl.js
angular.module('Capstone')
  .controller('NavController', ['$scope', '$state', 'User',
    function($scope, $state, User) {
      $scope.user;

      User.getUser()
        .then(function(user) {
          if (user.data._id) {
            $scope.user = user.data;
            $state.go('profile');
          }
        }).catch(function (error) {
          console.log('nav-error>>>>>>', error);
        });

}]);
