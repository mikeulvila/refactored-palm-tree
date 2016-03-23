angular.module('Capstone')
  .controller('FindCowriterController', ['$scope', '$state', 'User', 'FindCowriter',
    function($scope, $state, User, FindCowriter) {

      FindCowriter.getMyGenresUsers()
        .then(function(cowriters) {
          console.log('cowriters.data>>>', cowriters.data);
        }).catch(function(error) {
          console.log('error>>>', error);
        });


}]);
