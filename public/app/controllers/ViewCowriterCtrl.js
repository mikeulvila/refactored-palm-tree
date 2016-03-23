// public/app/controllers/ViewCowriterCtrl.js
angular.module('Capstone')
  .controller('ViewCowriterController', ['$scope', '$state', 'User', 'Tracks', 'Cowriter',
    function($scope, $state, User, Tracks, Cowriter) {

      Cowriter.getCowriter($state.params.id)
        .then(function(response) {
          $scope.cowriter = response.data;
          console.log('$scope.cowriter>>>', $scope.cowriter);
        }).catch(function(error) {
          console.log('getCowriter error>>>', error);
        });

}]);
