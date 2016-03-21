// public/app/controllers/EditProfileCtrl.js
angular.module('Capstone')
  .controller('EditProfileController', ['$scope', '$state', 'User', 'Upload',
    function($scope, $state, User, Upload) {

      User.getUser()
        .then(function(user) {
          $scope.user = user.data;
        }).catch(function (error) {

        });

      $scope.updateProfile = function(){
        var user = $scope.user;
        var id = user._id;
        User.updateUser(id, user)
          .then(function() {
            $state.go('profile');
          }).catch(function(error) {

          });
      };

      // $scope.$watch(function() {
      //   return $scope.file;
      // }, function() {
      //   upload($scope.file);
      // })

      // function upload (file) {
      //   if (file) {
      //     Upload.upload({
      //       url: '/api/profile/editPhoto',
      //       method: 'POST',
      //       data: {_id: $scope.user._id},
      //       file: file
      //     }).progress(function(event) {
      //       console.log('Firing upload event');
      //     }).success(function(data) {
      //       console.log('upload success data>>>', data)
      //     }).error(function(error) {
      //       console.log('upload error>>>', error);
      //     });
      //   }
      // };


}]);
