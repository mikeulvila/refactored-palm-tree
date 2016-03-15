// (function () {
  app.controller('mainCtrl', ['$scope', '$state', '$http', function ($scope, $state, $http) {
    $scope.login = function () {
      console.log('http call');
       $http.get('/auth/soundcloud').then(function (response) {
          console.log('signup response>>>', response);
       }, function (err) {
          if (err) throw err;
       });
    };




  }]); //END CONTROLLER
// }()); //END IIFE
