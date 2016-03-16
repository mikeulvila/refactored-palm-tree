// public/app/controllers/MainCtrl.js
angular.module('MainCtrl', []).controller('MainController', function($scope, $state, User) {

    const UserObj = User.getUserObj().then((user) => {

    console.log('UserObj>>>', user);
    })

});
