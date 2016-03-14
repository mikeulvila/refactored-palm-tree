// (function () {
  app.controller('signupCtrl', ['$scope', '$state', '$http', function ($scope, $state, $http) {
    $scope.newUser;
    $scope.createUser = function () {
       $http.post('api/user/signup', $scope.newUser).then(function (response) {
          console.log('signup response>>>', response);
       }, function (err) {
          if (err) throw err;
       });
    };




  }]); //END CONTROLLER
// }()); //END IIFE
