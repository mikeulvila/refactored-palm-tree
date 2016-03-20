// public/app/services/UserService.js
angular.module('Capstone')
    .factory('User', ['$http', '$state',
        function($http, $state) {

          return {
              // get user json object
              getUser: function() {
                return $http.get('/api/user');
              },
              // update profile
              updateProfile: function(data) {
                $http.post('/api/updateProfile', data)
                  .then(function() {
                    console.log('getting to then function')
                    $state.go('account');
                  }, function(error) {
                    console.log(error);
                  });
              }


              // these will work when more API routes are defined on the Node side of things
              // call to POST and create a new nerd
              // create : function(nerdData) {
              //     return $http.post('/api/nerds', nerdData);
              // },

              // call to DELETE a nerd
              // delete : function(id) {
              //     return $http.delete('/api/nerds/' + id);
              // }
          }

}]);
